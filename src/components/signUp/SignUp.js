import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, AsyncStorage } from 'react-native'
import PropTypes from 'prop-types'

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(184, 0, 43)',
    paddingLeft: 30,
    paddingRight: 30,
    alignItems: 'center',
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
    fname: '',
    lname: '',
    dob: '',
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

  handleFirstNameChange = (fname) => {
    this.setState({ fname })
  }

  handleLastNameChange = (lname) => {
    this.setState({ lname })
  }

  handleDoBChange = (dob) => {
    this.setState({ dob })
  }

  handleSubmit = () => {
    const { fname, lname, dob, } = this.state
    AsyncStorage.setItem('fname_signup', fname)
    AsyncStorage.setItem('lname_signup', lname)
    AsyncStorage.setItem('dob_signup', dob)

    console.log(fname, lname, dob)
    this.props.navigation.navigate('SignUp2')

  }

  render() {
    const { fname, lname, dob } = this.state
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={[styles.fbButton, styles.row]}>
            <Button
              title="SIGN UP WITH FACEBOOK"
              color="#fff"
              onPress={() => {}}
            />
          </View>

          <View style={styles.row}>
            <SignText>or with email</SignText>
          </View>

          <View>
            <View style={[styles.row, styles.logInButtonWrapper]}>
              <TextInput
              style={[styles.row, styles.textInput]}
              onChangeText={fname => this.handleFirstNameChange(fname)}
              value={this.state.fname}
              placeholder="FIRST NAME"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.lname.focus();
              }}
              />
              <TextInput
              ref='lname'
              style={[styles.row, styles.textInput]}
              onChangeText={lname => this.handleLastNameChange(lname)}
              value={this.state.lname}
              placeholder="LAST NAME"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.dob.focus();
              }}
              />
              <TextInput
              ref='dob'
              style={[styles.row, styles.textInput]}
              onChangeText={dob => this.handleDoBChange(dob)}
              value={this.state.dob}
              placeholder="DATE OF BIRTH"
              placeholderTextColor="#fff"
              returnKeyType="done"
              />
              <View style={styles.row}/>

              <View style={[styles.row, styles.logInButtonWrapper]}>
                <TouchableOpacity
                  onPress={() => this.handleSubmit()} // gets the next set of input fields
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

// PropTypes
SignText.propTypes = {
  children: PropTypes.string.isRequired,
}

Tcpp.propTypes = {
  children: PropTypes.array.isRequired,
}

export { styles, SignText, Tcpp }

