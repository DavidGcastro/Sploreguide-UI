import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'
import { styles, SignText, Tcpp } from './SignUp'

// Main Component
export class SignUp2 extends Component {
  state = {
    email: '',
    password: '',
    confirmPass: '',
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
    let firstName = await AsyncStorage.getItem('fname_signup')
    let lastName = await AsyncStorage.getItem('lname_signup')
    let dob = await AsyncStorage.getItem('dob_signup')

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