import React, { Component } from 'react'
import { Platform, Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableWithoutFeedback, Keyboard, AsyncStorage, DatePickerIOS } from 'react-native'
import PropTypes from 'prop-types'
import moment from 'moment'

import LogoLoading from '../../../components/LogoLoading'
import { handleFBLogin } from '../../../services/facebook'
import { fbLogin } from '../login/Login'
import { makeFirstLetterUpperCase } from '../../../helpers/strings'
import { LNAME_ERROR_MISSING, FNAME_ERROR_MISSING, DOB_ERROR_MISSING, DOB, LNAME, FNAME } from '../../../constants'

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
    height: 30,
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
    fnameError: '',
    lnameError: '',
    dobError: '',
    loading: false
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
    this.setState({ fname, fnameError:'' })
  }

  handleLastNameChange = (lname) => {
    this.setState({ lname, lnameError: '' })
  }

  handleDoBChange = (dob) => {
    this.setState({ dob: moment(dob), dobError: '' })
  }

  handleFBLogin = handleFBLogin.bind(this)

  useFB = () => {
    this.setState({loading: true})
    this.handleFBLogin()
  }

  handleSubmit = () => {
    let { fname, lname, dob, } = this.state

    if (!fname) {
      return this.setState({fnameError: FNAME_ERROR_MISSING})
    } else if (!lname) {
      return this.setState({lnameError: LNAME_ERROR_MISSING})
    } else if (!dob) {
      return this.setState({dobError: DOB_ERROR_MISSING})
    }

    fname = makeFirstLetterUpperCase(fname)
    lname = makeFirstLetterUpperCase(lname)

    AsyncStorage.setItem(FNAME, fname)
    AsyncStorage.setItem(LNAME, lname)
    AsyncStorage.setItem(DOB, dob.toDate().getTime().toString())

    this.props.navigation.navigate('SignUp2')

  }

  render() {
    const { fname, lname, dob, fnameError, lnameError, dobError, loading } = this.state

    return ( loading ? 
      <LogoLoading />
      :
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View style={[styles.fbButton, styles.row]}>
            <Button
              title="SIGN UP WITH FACEBOOK"
              color="#c70039"
              onPress={this.useFB}
            />
          </View>

          <View style={styles.row}>
            <SignText>or with email</SignText>
          </View>

          <View style={styles.row}/>

          <View>
            <View>
              <TextInput
              style={[styles.textInput]}
              onChangeText={fname => this.handleFirstNameChange(fname)}
              value={fname}
              placeholder="FIRST NAME"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.lname.focus();
              }}
              />
              <View>
                <Text style={styles.error}>{fnameError}</Text>
              </View>
              <View style={styles.row}/>

              <TextInput
              ref='lname'
              style={[styles.textInput]}
              onChangeText={lname => this.handleLastNameChange(lname)}
              value={lname}
              placeholder="LAST NAME"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                Keyboard.dismiss();
              }}
              />
              <View>
                <Text style={styles.error}>{lnameError}</Text>
              </View>
              <View style={styles.row}/>

              <TextInput
              ref='dob'
              style={[styles.textInput]}
              onFocus={() => Keyboard.dismiss()}
              // dob is moment object
              value={(dob && dob.calendar())}
              editable={false}
              placeholder="DATE OF BIRTH"
              placeholderTextColor="#fff"
              returnKeyType="done"
              />
              <View>
                <Text style={styles.error}>{dobError}</Text>
              </View>
              <View style={styles.row}/>
              
              <DatePickerIOS
                ref='dobpicker'
                // change moment to js date
                date={(dob && dob.toDate()) || moment().subtract(19, 'years').toDate()}
                mode='date'
                maximumDate={moment().toDate()}
                onDateChange={this.handleDoBChange}
              />

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
export default fbLogin(SignUp)

