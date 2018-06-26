import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { styles, SignText, Tcpp } from './SignUp'

import deviceStorage from '../../../services/deviceStorage'
import { validateEmail } from '../../../helpers/validators'
import { JWT, FNAME, LNAME, DOB, EMAIL_REQUIRED, EMAIL_MALFORMED, PASSWORD_REQUIRED, PASSWORD_ERROR_CONFIRM } from '../../../constants'

// GQL
const signupMutation = gql`
  mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateOfBirth: Date!) {
    signup(input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth}) {
      token
    }
  }
`

// Main Component
export class SignUp2 extends Component {
  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirmPass: '',
    confirmPassError: '',
    hidePassword: true
  }

  static navigationOptions = {
    title: 'Sign Up',
    headerStyle: {
      backgroundColor: 'rgb(184, 10, 50)',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  handleEmailChange = (email) => {
    this.setState({ email, emailError: '' })
  }

  handlePasswordChange = (password) => {
    this.setState({ password, passwordError: '' })
  }

  handleConfirmPassChange = (confirmPass) => {
    this.setState({ confirmPass, confirmPassError: '' })
  }

  handleSignUp = async () => {
    let { email, password, confirmPass } = this.state

    email = email.toLowerCase()

    //handle validation
    if (!email) {
      return this.setState({emailError: EMAIL_REQUIRED})
    } else if (!validateEmail(email)) {
      return this.setState({emailError: EMAIL_MALFORMED})
    } else if (!password) {
      return this.setState({passwordError: PASSWORD_REQUIRED})
    } else if (!confirmPass || password !== confirmPass) {
      return this.setState({confirmPassError: PASSWORD_ERROR_CONFIRM})
    }

    let firstName = await deviceStorage.getItem(FNAME)
    let lastName = await deviceStorage.getItem(LNAME)

    // Stored in AsyncStorage as string
    let dateOfBirth = await deviceStorage.getItem(DOB)
    dateOfBirth = Number(dateOfBirth)

    this.props.signup(email, password, firstName, lastName, dateOfBirth)
      .then(async (response) => {
        let { data } = response
        await deviceStorage.saveItem(JWT, data.signup.token)
        await deviceStorage.deleteMultipleItems([FNAME,LNAME,DOB])
        
        // update App state with jwt and rerender
        this.props.screenProps.saveJWT(data.signup.token)
      }).catch((error) => {
        console.log(error)
      })
  }

  render() {
    const { email, password, confirmPass, emailError, passwordError, confirmPassError } = this.state
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <View style={[styles.row, styles.logInButtonWrapper]}>
            
              <View style={styles.row}/>

              <TextInput
              style={[styles.textInput]}
              onChangeText={email => this.handleEmailChange(email)}
              value={this.state.email}
              placeholder="EMAIL"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.password.focus();
              }}
              />
              <View>
                <Text>{emailError}</Text>
              </View>
              <View style={styles.row}/>

              <TextInput
              ref='password'
              style={[styles.textInput]}
              onChangeText={password => this.handlePasswordChange(password)}
              value={this.state.password}
              placeholder="PASSWORD"
              placeholderTextColor="#fff"
              returnKeyType="next"
              secureTextEntry = { this.state.hidePassword }
              onSubmitEditing={(event) => {
                this.refs.confirmPass.focus();
              }}
              />
              <View>
                <Text>{passwordError}</Text>
              </View>
              <View style={styles.row}/>

              <TextInput
              ref='confirmPass'
              style={[styles.textInput]}
              onChangeText={confirmPass => this.handleConfirmPassChange(confirmPass)}
              value={this.state.confirmPass}
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="#fff"
              returnKeyType="done"
              secureTextEntry = { this.state.hidePassword }
              />
              <View>
                <Text>{confirmPassError}</Text>
              </View>
              <View style={styles.row}/>

              <View style={[styles.row, styles.logInButtonWrapper]}>
                <TouchableOpacity
                  onPress={this.handleSignUp}
                  style={styles.logInButton}
                >
                <Text style={styles.logInArrow}>{"\u003E"}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

export default graphql (
  signupMutation,
  {
    props: ({ mutate }) => ({
      signup: (email, password, firstName, lastName, dateOfBirth) => mutate({ variables: { email, password, firstName, lastName, dateOfBirth } })
    }),
  },
)(SignUp2)