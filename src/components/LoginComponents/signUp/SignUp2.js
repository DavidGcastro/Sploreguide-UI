import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import { styles, SignText, Tcpp } from './SignUp'

import deviceStorage from '../../../services/deviceStorage'
import { JWT, FNAME, LNAME, DOB } from '../../../constants'

// GQL
const signupMutation = gql`
  mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    signup(input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName}) {
      token
    }
  }
`

// Main Component
export class SignUp2 extends Component {
  state = {
    email: '',
    password: '',
    confirmPass: '',
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
    this.setState({ email })
  }

  handlePasswordChange = (password) => {
    this.setState({ password })
  }

  handleConfirmPassChange = (confirmPass) => {
    this.setState({ confirmPass })
  }

  handleSignUp = async () => {
    const { email, password, confirmPass, } = this.state
    let firstName = await deviceStorage.getItem(FNAME)
    let lastName = await deviceStorage.getItem(LNAME)
    let dob = await deviceStorage.getItem(DOB)
    console.log(this.props)
    this.props.signup(email, password, firstName, lastName)
      .then(async (response) => {
        let { data } = response
        console.log(data)
        await deviceStorage.saveItem(JWT, data.signup.token)
        await deviceStorage.deleteMultipleItems([FNAME,LNAME,DOB])
        this.props.screenProps.saveJWT(data.signup.token)
      }).catch((error) => {
        console.log(error)
      })


    console.log(email, password, confirmPass, firstName, lastName, dob)
  }

  render() {
    const { email, password, confirmPass } = this.state
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View>
            <View style={[styles.row, styles.logInButtonWrapper]}>
              <TextInput
              style={[styles.row, styles.textInput]}
              onChangeText={email => this.handleEmailChange(email)}
              value={this.state.email}
              placeholder="EMAIL"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.password.focus();
              }}
              />
              <TextInput
              ref='password'
              style={[styles.row, styles.textInput]}
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
              <TextInput
              ref='confirmPass'
              style={[styles.row, styles.textInput]}
              onChangeText={confirmPass => this.handleConfirmPassChange(confirmPass)}
              value={this.state.confirmPass}
              placeholder="CONFIRM PASSWORD"
              placeholderTextColor="#fff"
              returnKeyType="done"
              secureTextEntry = { this.state.hidePassword }
              />
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
      signup: (email, password, firstName, lastName) => mutate({ variables: { email, password, firstName, lastName } })
    }),
  },
)(SignUp2)