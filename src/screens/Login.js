import React from 'react'
import {
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  TextInput,
  Animated,
  Keyboard
} from 'react-native'
import { LinearGradient, AppLoading } from 'expo'
import Hr from '../components/Hr'
import GradientButton from '../components/GradientButton'
import styles from '../styles/login'
import GoBack from '../components/GoBack'
import { Ionicons } from '@expo/vector-icons'
import formStyles from '../styles/formStyles'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { graphql, compose } from 'react-apollo'
import { loginMutation, fbLoginMutation } from '../mutations'
import { handleFBLogin } from '../services/facebook'
import deviceStorage from '../services/deviceStorage'
import { validateEmail } from '../helpers/validators'
import {
  ASYNC_JWT_KEY,
  EMAIL_MALFORMED,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  GRAPHQL_ERROR_NO_USER_FOUND,
  GRAPHQL_ERROR_INVALID_PASSWORD,
  NETWORK_ERROR
} from '../constants'

let animations = {
  ...ifIphoneX(
    {
      form: -350,
      logoTop: -80,
      top: 20
    },
    {
      form: -240,
      logoTop: -67,
      top: 0
    }
  )
}

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }
    this.passwordInput = React.createRef()
    this.focusTextInput = this.focusTextInput.bind(this)
    this.logoWidth = new Animated.Value(80)
    this.logoHeight = new Animated.Value(50)
    this.logoLeft = new Animated.Value(0)
    this.logoTop = new Animated.Value(0)
    this.fade = new Animated.Value(1)
    this.fadeIn = new Animated.Value(0.1)
    this.form = new Animated.Value(0)
  }

  componentDidMount () {
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow
    )

    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide
    )
  }

  focusTextInput () {
    this.passwordInput.current.focus()
  }

  keyboardWillHide () {
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
        duration: 100
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
    ]).start()
  }

  keyboardWillShow () {
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
        duration: 100
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
      })
    ]).start()
  }

  handleFBLogin = handleFBLogin.bind(this)

  useFB = () => {
    this.setState({ loading: true })
    this.handleFBLogin()
  }

  useEmailLogin = async () => {
    let { email, password } = this.state

    email = email.toLowerCase()

    //TODO: HANDLE EMAIL & PASSWORD VALIDATION
    if (!email) {
      return this.setState({ error: EMAIL_REQUIRED })
    } else if (!validateEmail(email)) {
      return this.setState({ error: EMAIL_MALFORMED })
    } else if (!password) {
      return this.setState({ error: PASSWORD_REQUIRED })
    }

    this.props
      .login(email, password)
      .then(async response => {
        let { data } = response
        await deviceStorage.saveItem(ASYNC_JWT_KEY, data.login.token)
        // update App state with jwt and rerender
        this.props.screenProps.saveJWT(data.login.token)
      })
      .catch(error => {
        if (error && error.graphQLErrors) {
          if (error.graphQLErrors[0].message === GRAPHQL_ERROR_NO_USER_FOUND) {
            return this.setState({ error: GRAPHQL_ERROR_NO_USER_FOUND })
          } else if (
            error.graphQLErrors[0].message === GRAPHQL_ERROR_INVALID_PASSWORD
          ) {
            return this.setState({ error: GRAPHQL_ERROR_INVALID_PASSWORD })
          }
        } else if (error && error.networkError) {
          return this.setState({ error: NETWORK_ERROR })
        }
      })
  }

  render () {
    let { loading, error } = this.state

    if (loading) return <AppLoading />
    return (
      <ImageBackground
        source={require('../assets/img/login-noOverlay.jpg')}
        style={styles.image}>
        {/* PARENT */}
        <LinearGradient
          style={{ flex: 1 }}
          colors={['rgba(255, 255, 255, .7)', 'rgba(255, 255, 255, 1)']}
          locations={[0, 0.5]}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
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
                    width: this.logoWidth,
                    height: this.logoHeight,
                    left: this.logoLeft,
                    top: this.logoTop,
                    justifyContent: 'space-between'
                  }}
                  source={require('../assets/img/Logo-Blue.png')}
                />
                <Animated.Image
                  resizeMode="contain"
                  style={{ width: 201, height: 40, opacity: this.fade }}
                  source={require('../assets/img/title-gradient.png')}
                />
              </View>
              <Animated.View
                style={{
                  justifyContent: 'space-between',
                  width: '65%',
                  opacity: this.fade,
                  height: 100
                }}>
                >
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
                  top: this.form
                }}>
                <View
                  style={{
                    marginBottom: animations.button,
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
                          onChangeText={x =>
                            this.setState({ email: x, error: '' })
                          }
                          keyboardType="email-address"
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
                          textContentType="password"
                          onChangeText={x =>
                            this.setState({ password: x, error: '' })
                          }
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
                <View>
                  <Text style={[formStyles.formText, { color: 'red' }]}>
                    {error}
                  </Text>
                </View>
                <TouchableOpacity
                  style={{ width: '90%' }}
                  onPress={this.useEmailLogin}>
                  <GradientButton text="LOGIN" />
                </TouchableOpacity>
              </Animated.View>
            </View>
          </TouchableWithoutFeedback>
        </LinearGradient>
      </ImageBackground>
    )
  }
}

const login = graphql(loginMutation, {
  props: ({ mutate }) => ({
    login: (email, password) => mutate({ variables: { email, password } })
  })
})

export const fbLogin = graphql(fbLoginMutation, {
  props: ({ mutate }) => ({
    fbLogin: (email, first_name, last_name, id, token) =>
      mutate({ variables: { email, first_name, last_name, id, token } })
  })
})

export default compose(
  login,
  fbLogin
)(Login)
