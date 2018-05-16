import React, { Component } from 'react'
import { Platform, Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, AsyncStorage, DatePickerIOS } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import { makeFirstLetterUpperCase } from '../../../helpers/strings'
import { LNAME_ERROR_MISSING, FNAME_ERROR_MISSING } from '../../../constants'

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
    backgroundColor: '#fff',
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
    dob: moment().subtract(19, 'years'),
    fnameError: '',
    lnameError: '',
    showDatePicker: false
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

  showDatePicker = (show) => {
    if (show === this.state.showDatePicker) return
    console.log('has focus')
    this.setState({showDatePicker: show})
  }

  handleFirstNameChange = (fname) => {
    this.setState({ fname })
  }

  handleLastNameChange = (lname) => {
    this.setState({ lname })
  }

  handleDoBChange = (dob) => {
    this.setState({ dob: moment(dob) })
  }

  handleSubmit = () => {
    let { fname, lname, dob, } = this.state

    if (!fname) {
      return this.setState({fnameError: FNAME_ERROR_MISSING})
    } else if (!lname) {
      return this.setState({lnameError: LNAME_ERROR_MISSING})
    }

    fname = makeFirstLetterUpperCase(fname)
    lname = makeFirstLetterUpperCase(lname)

    AsyncStorage.setItem('fname_signup', fname)
    AsyncStorage.setItem('lname_signup', lname)
    AsyncStorage.setItem('dob_signup', dob)

    this.props.navigation.navigate('SignUp2')

  }

  render() {
    const { fname, lname, dob, showDatePicker } = this.state

    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); this.showDatePicker(false)}}>
        <View style={styles.container}>
          <View style={[styles.fbButton, styles.row]}>
            <Button
              title="SIGN UP WITH FACEBOOK"
              color="#c70039"
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
              onFocus={() => this.showDatePicker(false)}
              value={fname}
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
              onFocus={() => this.showDatePicker(false)}
              onChangeText={lname => this.handleLastNameChange(lname)}
              value={lname}
              placeholder="LAST NAME"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                Keyboard.dismiss();
                this.showDatePicker(true)
              }}
              />
              <TextInput
              ref='dob'
              style={[styles.row, styles.textInput]}
              onFocus={() => {Keyboard.dismiss(); this.showDatePicker(true)}}
              value={dob.calendar()}
              placeholder="DATE OF BIRTH"
              placeholderTextColor="#fff"
              returnKeyType="done"
              />
              {showDatePicker &&
              <DatePickerIOS
                date={dob.toDate()}
                mode='date'
                onDateChange={this.handleDoBChange}
              />}
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

