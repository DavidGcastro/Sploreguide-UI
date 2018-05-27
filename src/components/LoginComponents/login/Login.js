import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

import LogoLoading from '../../LogoLoading'
import { handleFBLogin } from '../../../services/facebook'
import deviceStorage from '../../../services/deviceStorage'
import { JWT, EMAIL_REQUIRED, PASSWORD_REQUIRED, EMAIL_MALFORMED, GRAPHQL_ERROR_NO_USER_FOUND, GRAPHQL_ERROR_INVALID_PASSWORD, NETWORK_ERROR } from '../../../constants'
import { validateEmail } from '../../../helpers/validators'

// GQL
const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
  login(input:{email: $email, password: $password}) {
    token
  }
}
`

const fbLoginMutation = gql`
  mutation FBLogin($email: String!, $first_name: String!, $last_name: String!, $id: ID!, $token: String!) {
    loginWithFacebook(input: {email: $email, first_name: $first_name, last_name: $last_name, id: $id, token: $token}) {
      token
    }
  }
`

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c70039',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  fbButton: {
    //backgroundColor: '#4267b2',
    backgroundColor: '#fff',
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.7,
  },
  row: {
    marginTop: 15,
  },
  passwordHolder: {
    position: 'relative',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  passwordBox: {
    alignSelf: 'stretch',
    paddingVertical: 0,
  },
  textInput: {
    height: 30,
    width: Dimensions.get('window').width * 0.8,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 16,
  },
  visibilityBtn:{
    position: 'absolute',
    right: 5,
    height: 40,
    width: 50,
    padding: 5
  },
  logInButton: {
    width: Dimensions.get('window').width * 0.13,
    paddingLeft: 18,
    paddingBottom: 5,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  logInArrow: {
    color: '#c70039',
    fontSize: 35
  },
  logInButtonWrapper: {
    alignSelf: 'flex-end'
  },
  fyg: {
    opacity: 0.5,
  }
})
// end of styles

// custom components for Login Component
const LoginText = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
)
// end of custom components

// Main Component
class Login extends Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    generalError: '',
    hidePassword: true,
    loading: false
  }
  static navigationOptions = {
    title: 'Log in',
    headerStyle: {
      backgroundColor: 'rgb(184, 10, 50)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  updateEmail = (email) => {
    let emailError = ''
    let generalError = ''
    this.setState({ email, emailError, generalError })
  }

  updatePassword = (password) => {
    let passwordError = ''
    let generalError = ''
    this.setState({ password, passwordError, generalError })
  }

  handleFBLogin = handleFBLogin.bind(this)

  useFB = () => {
    this.setState({loading: true})
    this.handleFBLogin()
  }

  handleLogin = async () => {
    let { email, password } = this.state

    email = email.toLowerCase()

    //handle validation
    if (!email) {
      return this.setState({emailError: EMAIL_REQUIRED})
    } else if(! validateEmail(email)) {
      return this.setState({emailError: EMAIL_MALFORMED})
    } else if (!password) {
      return this.setState({passwordError: PASSWORD_REQUIRED})
    } 

    this.props.login(email, password)
      .then(async (response) => {
        let { data } = response
        await deviceStorage.saveItem(JWT, data.login.token)
        
        // update App state with jwt and rerender
        this.props.screenProps.saveJWT(data.login.token)
      }).catch((error) => {
        if (error && error.graphQLErrors > 1) {
          if (error.graphQLErrors[0].message === GRAPHQL_ERROR_NO_USER_FOUND) {
            let emailError = GRAPHQL_ERROR_NO_USER_FOUND
            return this.setState({emailError})
          } else if (error.graphQLErrors[0].message === GRAPHQL_ERROR_INVALID_PASSWORD) {
            let passwordError = GRAPHQL_ERROR_INVALID_PASSWORD
            return this.setState({passwordError})
          }
        } else if (error && error.networkError) {
          console.log(error)
          let generalError = NETWORK_ERROR
          return this.setState({generalError})
        }
      })
  }

  managePasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  }

  render() {
    let { emailError, generalError, passwordError, loading } = this.state

    return ( loading ? 
      <LogoLoading />
      :
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.row}/>
          <View style={[styles.fbButton, styles.row]}>
            <Button
              title="LOG IN WITH FACEBOOK"
              color="#c70039"
              onPress={this.useFB}
            />
          </View>
          <View style={styles.row}/>

          <View style={styles.row}>
            <LoginText>or</LoginText>
          </View>

          <View style={styles.row}/>

          <View>
            <TextInput
              ref="email"
              style={[styles.row, styles.textInput]}
              onChangeText={(email) => this.updateEmail(email)}
              value={this.state.email}
              placeholder="EMAIL"
              placeholderTextColor="#fff"
              returnKeyType={ "next" }
              onSubmitEditing={(event) => {
                this.refs.password.focus()
              }}
            />

            <View>
              <Text>{emailError}</Text>
            </View>

            <View style={styles.row}/>
            <View style={styles.passwordHolder}>
              <TextInput
                ref='password'
                style={[styles.row, styles.textInput, styles.passwordBox]}
                onChangeText={password => this.updatePassword(password)}
                value={this.state.password}
                placeholder="PASSWORD"
                placeholderTextColor="#fff"
                returnKeyType="done"
                secureTextEntry = { this.state.hidePassword }
              />
              <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
                {this.state.hidePassword ? <LoginText>Show</LoginText> : <LoginText>Hide</LoginText>}
              </TouchableOpacity>
            </View>

            <View >
              <Text>{passwordError}</Text>
            </View>
            <View >
              <Text>{generalError}</Text>
            </View>
          </View>


          <View style={styles.row}/>

          <View style={[styles.row, styles.logInButtonWrapper]}>
            <TouchableOpacity
              onPress={this.handleLogin}
              style={styles.logInButton}
            >
            <Text style={styles.logInArrow}>{"\u003E"}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row} />
          <View style={[styles.row, styles.fyg]}>
            <Button
              title="Forgot your password?"
              color="#fff"
              onPress={() => {}}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

// PropTypes
LoginText.propTypes = {
  children: PropTypes.string.isRequired,
}

const login = graphql(
  loginMutation,
  {
    props: ({ mutate }) => ({
      login: (email, password) => mutate({ variables: { email, password } }),
    }),
  },
)

export const fbLogin = graphql(
  fbLoginMutation,
  {
    props: ({ mutate }) => ({
      fbLogin: (email, first_name, last_name, id, token) => mutate({ variables: { email, first_name, last_name, id, token } }),
    }),
  },
)

export default compose(login, fbLogin)(Login)

