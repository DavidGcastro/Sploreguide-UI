import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput,
  Animated,
  Keyboard
} from 'react-native';
import { LinearGradient, AppLoading } from 'expo';
import moment from 'moment';
import Hr from '../components/Hr';
import GradientButton from '../components/GradientButton';
import styles from '../styles/login';
import formStyles from '../styles/formStyles';
import GoBack from '../components/GoBack';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { graphql, compose } from 'react-apollo';
import { fbLogin } from './Login';
import { signupMutation, fbLoginMutation } from '../mutations';
import { handleFBLogin } from '../services/facebook';
import deviceStorage from '../services/deviceStorage';
import { validateEmail } from '../helpers/validators';
import { makeFirstLetterUpperCase } from '../helpers/strings';
import {
  ASYNC_JWT_KEY,
  FNAME_ERROR_MISSING,
  LNAME_ERROR_MISSING,
  SEX_ERROR_MISSING,
  DOB_ERROR_MISSING,
  EMAIL_REQUIRED,
  EMAIL_MALFORMED,
  PASSWORD_REQUIRED,
  NETWORK_ERROR,
  GRAPHQL_ERROR_USER_EXISTS
} from '../constants';

let animations = {
  ...ifIphoneX(
    {
      form: -200,
      marginBottomButton: 50,
      logoTop: -60,
      top: 20
    },
    {
      form: -165,
      marginBottomButton: 40,
      logoTop: -67,
      top: 0
    }
  )
};

class Signup extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    sex: '',
    dob: moment().subtract(19, 'years'),
    error: '',
    loading: false,
    logoWidth: new Animated.Value(80),
    logoHeight: new Animated.Value(50),
    logoLeft: new Animated.Value(0),
    logoTop: new Animated.Value(0),
    fade: new Animated.Value(1),
    fadeIn: new Animated.Value(0.1),
    form: new Animated.Value(0),
    button: new Animated.Value(0)
  };

  lastNameInput = React.createRef();
  sexInput = React.createRef();
  birthInput = React.createRef();
  emailInput = React.createRef();
  passwordInput = React.createRef();
  focusTextInput = this.focusTextInput.bind(this);

  componentDidMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    );

    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    );
  }

  keyboardWillHide = () => {
    Animated.parallel([
      Animated.timing(this.state.logoHeight, {
        toValue: 50,
        duration: 300
      }),
      Animated.timing(this.state.logoTop, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.state.logoWidth, {
        toValue: 80,
        duration: 300
      }),
      Animated.timing(this.state.fade, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.state.fadeIn, {
        toValue: 0.1,
        duration: 300
      }),
      Animated.timing(this.state.logoLeft, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.state.form, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.state.button, {
        toValue: 0,
        duration: 300
      })
    ]).start();
  };

  keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(this.state.logoHeight, {
        toValue: 37,
        duration: 300
      }),
      Animated.timing(this.state.logoTop, {
        toValue: animations.logoTop,
        duration: 300
      }),
      Animated.timing(this.state.logoWidth, {
        toValue: 32,
        duration: 300
      }),
      Animated.timing(this.state.fade, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.state.fadeIn, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.state.logoLeft, {
        toValue: -30,
        duration: 300
      }),
      Animated.timing(this.state.form, {
        toValue: animations.form,
        duration: 300
      }),
      Animated.timing(this.state.button, {
        toValue: animations.marginBottomButton,
        duration: 300
      })
    ]).start();
  };

  focusTextInput(inputToFocus) {
    inputToFocus.current.focus();
  }

  handleFBLogin = handleFBLogin.bind(this);

  useFB = () => {
    this.setState({ loading: true });
    this.handleFBLogin();
  };

  useEmailSignup = async () => {
    let { firstName, lastName, email, password, sex, dob } = this.state;

    if (!firstName) {
      return this.setState({ error: FNAME_ERROR_MISSING });
    } else if (!lastName) {
      return this.setState({ error: LNAME_ERROR_MISSING });
    } else if (!sex) {
      return this.setState({ error: SEX_ERROR_MISSING });
    } else if (!dob) {
      return this.setState({ error: DOB_ERROR_MISSING });
    }

    firstName = makeFirstLetterUpperCase(firstName);
    lastName = makeFirstLetterUpperCase(lastName);

    email = email.toLowerCase();

    //handle validation
    if (!email) {
      return this.setState({ error: EMAIL_REQUIRED });
    } else if (!validateEmail(email)) {
      return this.setState({ error: EMAIL_MALFORMED });
    } else if (!password) {
      return this.setState({ error: PASSWORD_REQUIRED });
    }

    //send dob as time value in milliseconds
    let dateOfBirth = dob.toDate().getTime();

    this.props
      .signup(email, password, firstName, lastName, dateOfBirth)
      .then(async response => {
        let { data } = response;
        await deviceStorage.saveItem(ASYNC_JWT_KEY, data.signup.token);
        // update App state with jwt and rerender
        this.props.screenProps.saveJWT(data.signup.token);
      })
      .catch(error => {
        if (error && error.graphQLErrors) {
          if (error.graphQLErrors[0].message === GRAPHQL_ERROR_USER_EXISTS) {
            return this.setState({ error: GRAPHQL_ERROR_USER_EXISTS });
          }
        } else if (error && error.networkError) {
          return this.setState({ error: NETWORK_ERROR });
        }
      });
  };

  render() {
    let { loading, dob, error } = this.state;

    if (loading) return <AppLoading />;
    return (
      <ImageBackground
        source={require('../assets/img/login-noOverlay.jpg')}
        style={styles.image}>
        {/* PARENT */}
        <LinearGradient
          style={{
            flex: 1
          }}
          colors={['rgba(255, 255, 255,.7)', 'rgba(255, 255, 255, 1)']}
          locations={[0, 0.5]}>
          <SafeAreaView
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20
            }}>
            <TouchableOpacity
              style={{
                marginBottom: 51,
                alignSelf: 'flex-start',
                top: animations.top
              }}
              onPress={() => this.props.navigation.navigate('Home')}>
              <GoBack />
            </TouchableOpacity>
            <View style={styles.wrapper}>
              <Animated.Image
                resizeMode="contain"
                style={{
                  width: this.state.logoWidth,
                  height: this.state.logoHeight,
                  left: this.state.logoLeft,
                  top: this.state.logoTop
                }}
                source={require('../assets/img/Logo-Blue.png')}
              />
              <Animated.Image
                resizeMode="contain"
                style={{ width: 201, height: 40, opacity: this.state.fade }}
                source={require('../assets/img/title-gradient.png')}
              />
            </View>
            <Animated.View
              style={{
                justifyContent: 'space-between',
                width: '65%',
                opacity: this.state.fade,
                height: 100
              }}>
              <View style={styles.iconContainer}>
                <TouchableOpacity onPress={this.useFB}>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/facebook.png')}
                  />
                </TouchableOpacity>
              </View>
              <Hr text="OR" />
            </Animated.View>
            <Animated.View
              style={{
                marginBottom: '10%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                width: '100%',
                top: this.state.form
              }}>
              <View
                style={{
                  marginBottom: animations.marginBottomButton,
                  justifyContent: 'center',
                  alignContent: 'center',
                  alignItems: 'center',
                  width: '100%'
                }}>
                <View style={formStyles.parent}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end'
                    }}>
                    {/*FIRST FORM*/}
                    <View
                      style={{
                        paddingTop: 20,
                        paddingRight: 10,
                        width: 150
                      }}>
                      <Text style={formStyles.formText}>Full Name</Text>
                      <View style={formStyles.inputIconContainerHalf}>
                        <Ionicons
                          name="ios-person-outline"
                          size={18}
                          style={{
                            paddingRight: 10,
                            color: 'rgba(132, 146, 166, 1)'
                          }}
                        />
                        <TextInput
                          onChangeText={x =>
                            this.setState({ firstName: x, error: '' })
                          }
                          onSubmitEditing={() =>
                            this.focusTextInput(this.lastNameInput)
                          }
                          returnKeyType="next"
                          placeholder="First Name"
                          style={{
                            fontSize: 13,
                            width: '50%'
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                      <Text
                        style={{
                          fontSize: 13,
                          paddingBottom: 8,
                          color: 'rgba(132, 146, 166, 1)'
                        }}
                      />
                      <View style={formStyles.inputIconContainerHalf}>
                        <TextInput
                          ref={this.lastNameInput}
                          onChangeText={x =>
                            this.setState({ lastName: x, error: '' })
                          }
                          onSubmitEditing={() =>
                            this.focusTextInput(this.sexInput)
                          }
                          returnKeyType="next"
                          placeholder="Last Name"
                          style={{
                            fontSize: 13
                          }}
                        />
                      </View>
                    </View>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'flex-end'
                    }}>
                    {/*SECOND FORM*/}
                    <View
                      style={{
                        paddingTop: 20,
                        paddingRight: 10,
                        width: 150
                      }}>
                      <Text style={formStyles.formText}>Sex</Text>
                      <View style={formStyles.inputIconContainerHalf}>
                        <Ionicons
                          name="ios-transgender"
                          size={18}
                          style={{
                            paddingRight: 10,
                            color: 'rgba(132, 146, 166, 1)'
                          }}
                        />
                        <TextInput
                          ref={this.sexInput}
                          onChangeText={x =>
                            this.setState({ sex: x, error: '' })
                          }
                          onSubmitEditing={() =>
                            this.focusTextInput(this.birthInput)
                          }
                          returnKeyType="next"
                          placeholder="Choose your Sex"
                          style={{
                            fontSize: 13,
                            width: '50%'
                          }}
                        />
                      </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                      <Text
                        style={{
                          fontSize: 13,
                          paddingBottom: 8,
                          color: 'rgba(132, 146, 166, 1)'
                        }}>
                        Birth Date
                      </Text>
                      <View style={formStyles.inputIconContainerHalf}>
                        <FontAwesome
                          name="birthday-cake"
                          size={18}
                          style={formStyles.iconStyles}
                        />
                        <TextInput
                          ref={this.birthInput}
                          value={dob.format('MMM Do YYYY')}
                          onChangeText={x =>
                            this.setState({ dob: x, error: '' })
                          }
                          onSubmitEditing={() =>
                            this.focusTextInput(this.emailInput)
                          }
                          returnKeyType="next"
                          placeholder="Enter Birth Date"
                          style={{
                            fontSize: 13
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{ paddingTop: 20 }}>
                    <Text style={formStyles.formText}>Email</Text>
                    <View style={formStyles.inputIconContainer}>
                      <Ionicons
                        name="ios-mail-open-outline"
                        size={18}
                        style={formStyles.iconStyles}
                      />
                      <TextInput
                        ref={this.emailInput}
                        onChangeText={x =>
                          this.setState({ email: x, error: '' })
                        }
                        returnKeyType="next"
                        placeholder="Type your Email"
                        onSubmitEditing={() =>
                          this.focusTextInput(this.passwordInput)
                        }
                        style={{
                          fontSize: 13,
                          width: '80%'
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ paddingTop: 20 }}>
                    <Text style={formStyles.formText}>Password</Text>
                    <View style={formStyles.inputIconContainer}>
                      <Ionicons
                        name="ios-lock-outline"
                        size={18}
                        style={formStyles.iconStyles}
                      />
                      <TextInput
                        ref={this.passwordInput}
                        onChangeText={x =>
                          this.setState({ password: x, error: '' })
                        }
                        secureTextEntry={true}
                        returnKeyType="next"
                        placeholder="Type your Password"
                        style={{
                          fontSize: 13,
                          width: '80%'
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <Text style={[formStyles.formText, { color: 'red' }]}>
                  {error}
                </Text>
              </View>
              <TouchableOpacity
                style={{ width: '90%', bottom: this.state.button }}
                onPress={this.useEmailSignup}>
                <GradientButton text="SIGNUP" />
              </TouchableOpacity>
            </Animated.View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}

const signup = graphql(signupMutation, {
  props: ({ mutate }) => ({
    signup: (email, password, firstName, lastName, dateOfBirth) =>
      mutate({
        variables: { email, password, firstName, lastName, dateOfBirth }
      })
  })
});

export default compose(
  signup,
  fbLogin
)(Signup);
