import React from 'react'
import {
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Animated,
  Keyboard
} from 'react-native';
import DatePicker from 'react-native-datepicker'

import { LinearGradient, AppLoading } from 'expo'
import moment from 'moment'
import Hr from '../components/Hr';
import GradientButton from '../components/GradientButton'
import styles from '../styles/login'
import formStyles from '../styles/formStyles'
import GoBack from '../components/GoBack'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { graphql, compose } from 'react-apollo'
import { fbLogin } from './Login'
import { signupMutation, fbLoginMutation } from '../mutations'
import { handleFBLogin } from '../services/facebook'
import deviceStorage from '../services/deviceStorage'
import { validateEmail } from '../helpers/validators'
import { makeFirstLetterUpperCase } from '../helpers/strings'
import SelectInput from 'react-native-select-input-ios'
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
      form: -260,
      logoTop: -60,
    },
    {
      form: -210,
      logoTop: -60,
    

    }
  )
};

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      sex: '',
      dob: '',
      error: '',
      loading: false
    };
    this.lastNameInput = React.createRef();
    this.sexInput = React.createRef();
    this.birthInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.submitButton = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
    this.loading = false;
    this.logoWidth = new Animated.Value(80);
    this.logoHeight = new Animated.Value(50);
    this.logoLeft = new Animated.Value(0);
    this.logoTop = new Animated.Value(0);
    this.fade = new Animated.Value(1);
    this.fadeIn = new Animated.Value(0.1);
    this.form = new Animated.Value(0);
  }

  componentDidMount () {
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
      Animated.timing(this.logoHeight, {
        toValue: 50,
        duration: 300
      }),
      Animated.timing(this.logoTop, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.logoWidth, {
        toValue: 80,
        duration: 300
      }),
      Animated.timing(this.fade, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.fadeIn, {
        toValue: 0.1,
        duration: 300
      }),
      Animated.timing(this.logoLeft, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.form, {
        toValue: 0,
        duration: 300
      })
    ]).start();
  };

  keyboardWillShow = () => {
    Animated.parallel([
      Animated.timing(this.logoHeight, {
        toValue: 37,
        duration: 300
      }),
      Animated.timing(this.logoTop, {
        toValue: animations.logoTop,
        duration: 300
      }),
      Animated.timing(this.logoWidth, {
        toValue: 32,
        duration: 300
      }),
      Animated.timing(this.fade, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.fadeIn, {
        toValue: 1,
        duration: 300
      }),
      Animated.timing(this.logoLeft, {
        toValue: -30,
        duration: 300
      }),
      Animated.timing(this.form, {
        toValue: animations.form,
        duration: 300
      }),
   
    ]).start();
  };

  focusTextInput = (inputToFocus) => {
    inputToFocus.current.focus(inputToFocus);
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
    let dateOfBirth = dob.getTime();

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

  getPickerOptions () {
    return [
      { value: 'male', label: 'Male' },
      { value: 'female', label: 'Female' }
    ];
  }
  render () {
    let { loading, sex, dob, error } = this.state;

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
          <TouchableOpacity
            style={{
              padding: 30,
            }}
            onPress={() => this.props.navigation.navigate('Home')}>
            <GoBack />
          </TouchableOpacity>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <View
              style={{
                flex: 1,
                alignContent: 'center',
                alignItems: 'center',
                justifyContent: 'space-evenly',
             
              }}>
              <View style={[styles.wrapper, {
              }]}>
                <Animated.Image
                  resizeMode="contain"
                  style={{
                    width: this.logoWidth,
                    height: this.logoHeight,
                    left: this.logoLeft,
                    top: this.logoTop,
                  }}
                  source={require('../assets/img/Logo-Blue.png')}
                />
                <Animated.Image
                  resizeMode="contain"
                  style={{ width: 201, height: 40, opacity: this.fade }}
                  source={require('../assets/img/title-gradient.png')}
                />
              </View>
              {/*****************************************************************/}
              <Animated.View
                style={{
                  width: '90%',
                  opacity: this.fade,
                  
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
              {/*****************************************************************/}
              <Animated.View
                style={{
                  width: '100%',
                  top: this.form,
                  paddingVertical:10,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                <View style={[formStyles.parent, { width: '80%'}]}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'flex-end',
                    }}>
                    {/*FIRST FORM*/}
                    <View style={{ width: '50%' }}>
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
                          textContentType="name"
                          returnKeyType="next"
                          placeholder="First Name"
                          style={{
                            fontSize: 13,
                            width: '50%'
                          }}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: '50%'
                      }}>
                      <View style={formStyles.inputIconContainerHalf}>
                        <TextInput
                          ref={this.lastNameInput}
                          onChangeText={x =>
                            this.setState({ lastName: x, error: '' })
                          }
                          onSubmitEditing={() =>
                            this.focusTextInput(this.sexInput)
                          }
                          textContentType="name"
                          returnKeyType="next"
                          placeholder="Last Name"
                          style={{
                            fontSize: 13,
                            width: '50%'
                          }}
                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      paddingTop: 20,
                      alignItems: 'flex-end',
                      width: '100%'
                    }}>
                    {/*SECOND FORM*/}
                    <View
                      style={{
                        width: '50%',
                      }}>
                      <Text style={formStyles.formText}>Sex</Text>
                      <View style={formStyles.inputIconContainerHalf}>
                        <Ionicons
                          name="ios-transgender"
                          size={18}
                          style={formStyles.iconStyles}
                        />
                        <SelectInput
                          ref={this.sexInput}
                          style={{
                            alignContent: 'flex-start',
                            flex: 1,
                            flexDirection: 'row'
                          }}
                          onSubmitEditing={val => {
                            this.birthInput.current.onPressDate();
                            this.setState({ sex: val || 'male' });
                          }}
                          placeholder={'Choose your Sex'}
                          submitKeyText={'Next'}
                          value={sex}
                          options={this.getPickerOptions()}
                        />
                      </View>
                    </View>
                    <View style={{ width: '50%' }}>
                      <Text style={formStyles.formText}>Birth Date</Text>
                      <View style={formStyles.inputIconContainerHalf}>
                        <FontAwesome
                          name="birthday-cake"
                          size={18}
                          style={formStyles.iconStyles}
                        />
                        <DatePicker
                          ref={this.birthInput}
                          date={dob}
                          showIcon={false}
                          customStyles={{
                            dateInput: {
                              borderWidth: 0
                            },
                            btnTextConfirm: {
                              color: '#006bff'
                            },
                            btnTextCancel: {
                              color: '#006bff'
                            },
                            placeholderText: [
                              formStyles.placeholderText,
                              { alignSelf: 'flex-start' }
                            ],

                            dateTouchBody: {
                              height: 20
                            },
                            dateText: [
                              formStyles.formText,
                              { paddingVertical: 10, alignSelf: 'flex-start' }
                            ]
                          }}
                          mode="date"
                          placeholder="Enter Birth Date"
                          format="MMMM DD YYYY"
                          minDate={moment()
                            .subtract(100, 'y')
                            .toDate()}
                          maxDate={new Date()}
                          confirmBtnText="Next"
                          cancelBtnText="Cancel"
                          onDateChange={date => {
                            this.setState({
                              dob: moment(date).toDate(),
                              error: ''
                            });
                          }}
                          onCloseModal={() =>
                            setTimeout(
                              () => this.focusTextInput(this.emailInput),
                              500
                            )
                          }
                        />
                      </View>
                    </View>
                  </View>
                  <View style={{
                    paddingTop: 10
                  }}>
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
                        textContentType="password"
                        returnKeyType="next"
                        keyboardType="email-address"
                        placeholder="Type your Email"
                        onSubmitEditing={() =>
                          this.focusTextInput(this.passwordInput)
                        }
                        style={{
                          fontSize: 13,
                          width: '80%',
                          alignSelf: 'flex-end'
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ paddingTop: 10 }}>
                    <Text style={formStyles.formText}>Password</Text>
                    <View style={formStyles.inputIconContainer}>
                      <Ionicons
                        name="ios-lock-outline"
                        size={18}
                        style={formStyles.iconStyles}
                      />
                      <TextInput
                        ref={this.passwordInput}
                        maxLength={15}
                        onChangeText={x =>
                          this.setState({ password: x, error: '' })
                        }
                        onSubmitEditing={this.useEmailSignup}
                        secureTextEntry={true}
                        returnKeyType="done"
                        placeholder="Type your Password"
                        style={{
                          fontSize: 13,
                          width: '80%'
                        }}
                      />
                    </View>
                  </View>
                </View>
                {/************************************************************/}
                <Animated.View style={{ width: '90%'}}>
                  <View>
                    <Text
                      style={[
                        formStyles.formText,
                        { textAlign: 'center', color: 'red' }
                      ]}>
                      {error}
                    </Text>
                  </View>
                  <TouchableOpacity
                    style={{}}
                    ref={this.submitButton}
                    onPress={this.useEmailSignup}>
                    <GradientButton text="SIGNUP" />
                  </TouchableOpacity>
                </Animated.View>
                {/************************************************************/}
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
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
