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
import { LinearGradient } from 'expo';
import Hr from '../components/Hr';
import GradientButton from '../components/GradientButton';
import styles from '../styles/login';
import GoBack from '../components/GoBack';
import { Ionicons } from '@expo/vector-icons';
import formStyles from '../styles/formStyles';
import { ifIphoneX } from 'react-native-iphone-x-helper';

let animations = {
  ...ifIphoneX(
    {
      form: -320,
      marginBottomButton: '10%',
      logoTop: -60,
      top: 20
    },
    {
      form: -250,
      marginBottomButton: 15,
      logoTop: -67,
      top: 0
    }
  )
};

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      logoWidth: new Animated.Value(80),
      logoHeight: new Animated.Value(50),
      logoLeft: new Animated.Value(0),
      logoTop: new Animated.Value(0),
      fade: new Animated.Value(1),
      fadeIn: new Animated.Value(0.1),
      form: new Animated.Value(0),
      background: new Animated.Value(0.7)
    };
    this.passwordInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
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
  focusTextInput() {
    this.passwordInput.current.focus();
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
        duration: 100
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
      Animated.timing(this.state.background, {
        toValue: 1,
        duration: 500
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
        duration: 100
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
      Animated.timing(this.state.background, {
        toValue: 1,
        duration: 300
      })
    ]).start();
  };

  render() {
    return (
      <ImageBackground
        source={require('../assets/img/login-noOverlay.jpg')}
        style={styles.image}>
        {/* PARENT */}
        <LinearGradient
          style={{ flex: 1 }}
          colors={['rgba(255, 255, 255, .7)', 'rgba(255, 255, 255, 1)']}
          locations={[0, 0.5]}>
          <SafeAreaView
            style={{
              flex: 1,
              alignContent: 'center',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 20,
              top: -10
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
              >
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/facebook.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/twitter.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/googleplus.png')}
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
                  <View style={{ paddingTop: 20 }}>
                    <Text style={formStyles.formText}>Email</Text>
                    <View style={formStyles.inputIconContainer}>
                      <Ionicons
                        name="ios-mail-open-outline"
                        size={18}
                        style={formStyles.iconStyles}
                      />
                      <TextInput
                        onChangeText={x => this.setState({ email: x })}
                        returnKeyType="next"
                        placeholder="Type your Email"
                        onSubmitEditing={() => this.focusTextInput()}
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
                        onChangeText={x => this.setState({ password: x })}
                        ref={this.passwordInput}
                        secureTextEntry={true}
                        returnKeyType="next"
                        placeholder="Type your Password"
                        style={{
                          fontSize: 13,
                          width: '80%'
                        }}
                      />
                      <TouchableOpacity>
                        <Text
                          style={{
                            fontSize: 12,
                            color: 'rgba(132,146,166,1)'
                          }}>
                          Forgot?
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{ width: '90%' }}
                onPress={() => this.props.navigation.navigate('Landing')}>
                <GradientButton text="LOGIN" />
              </TouchableOpacity>
            </Animated.View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
