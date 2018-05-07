import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import PropTypes from 'prop-types'

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(184, 0, 43)',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 16,
  },
  fbButton: {
    backgroundColor: '#4267b2',
    borderRadius: 30,
    width: Dimensions.get('window').width * 0.7,
  },
  row: {
    marginTop: 15,
  },
  textInput: {
    height: 50,
    width: Dimensions.get('window').width * 0.8,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 16,
  },
  signButton: {
    width: Dimensions.get('window').width * 0.4,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  tcpp: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.8,
  },
  tols: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
})
// end of styles

// custom components for signUp Component
const SignText = ({ children }) => (
  <Text style={styles.text}>{children}</Text>
)
// terms and conditions, privacy policy
const Tcpp = ({ children }) => (
  <Text style={styles.tcpp}>{children}</Text>
)
// end of custom components

// Main Component
export class SignUp extends Component {
  state = {
    firstname: '',
    lastname: '',
    dob: ''
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

  //Should I remove ref from lastanme on 113 and 
  render() {
    return (
      <View style={styles.container}>

        <View style={[styles.fbButton, styles.row]}>
          <Button
            title="SIGN UP WITH FACEBOOK"
            color="#fff"
            onPress={() => {}}
          />
        </View>

        <View style={styles.row}>
          <SignText>Hey</SignText>
        </View>

        <View>
          {/* eslint-disable*/}
          <TextInput
            style={[styles.row, styles.textInput]}
            onChangeText={firstname => this.setState({ firstname})}
            value={this.state.firstname}
            placeholder="First Name"
            placeholderTextColor="#fff"
            returnKeyType="next"
            onSubmitEditing={(event) => {
              this.refs.lastname.focus();
            }}
          />
          <TextInput
            ref='lastname'
            style={[styles.row, styles.textInput]}
            onChangeText={lastname => this.setState({ lastname })}
            value={this.state.lastname}
            placeholder="Last Name"
            placeholderTextColor="#fff"
            returnKeyType="next"
            onSubmitEditing={(event) => {
              this.refs.dob.focus();
            }}
            secureTextEntry
          />
          <TextInput
            ref='dob'
            style={[styles.row, styles.textInput]}
            onChangeText={dob => this.setState({ dob })}
            value={this.state.dob}
            placeholder="Date Of Birth"
            placeholderTextColor="#fff"
            returnKeyType="done"
            secureTextEntry
          />
          {/* eslint-enable */}
        </View>

        <View style={[styles.row, styles.signButton]}>
          <Button
            title="SIGN UP"
            onPress={() => {}}
            color="rgb(184, 0, 43)"
          />
        </View>

        <View style={styles.row} />

        <View style={styles.row}>
          <Tcpp style={styles}>
            <Text>By signing up, you agree to our </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.tols}>Terms &amp; Conditions</Text>
            </TouchableOpacity>
            <Text> and </Text>
            <TouchableOpacity onPress={() => {}}>
              <Text style={styles.tols}>Privacy Policy</Text>
            </TouchableOpacity>
          </Tcpp>
        </View>

      </View>
    )
  }
}

// PropTypes
SignText.propTypes = {
  children: PropTypes.string.isRequired,
}

Tcpp.propTypes = {
  children: PropTypes.array.isRequired,
}

