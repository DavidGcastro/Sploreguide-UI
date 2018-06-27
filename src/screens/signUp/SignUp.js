import React, { Component } from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  Image,
  ScrollView,
  Button,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  DatePickerIOS,
  Animated,
  Easing
} from 'react-native'
import { Constants } from 'expo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'
import moment from 'moment'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'
import deviceStorage from '../../services/deviceStorage'
import { validateEmail } from '../../helpers/validators'
import { handleFBLogin } from '../../services/facebook'
import { fbLogin } from '../login/Login'
import { LogoLoading } from '../../components/Loading'
import { 
  JWT,
  FNAME,
  FNAME_ERROR_MISSING,
  LNAME,
  LNAME_ERROR_MISSING,
  DOB,
  EMAIL_REQUIRED,
  EMAIL_MALFORMED,
  PASSWORD_REQUIRED,
  DOB_ERROR_MISSING,
  NETWORK_ERROR,
  USER_EMAIL_EXISTS
} from '../../constants'
import { TextInputField } from '../../components/Input'
import { BasicButtonWithText } from '../../components/Button'
import colors from '../../styles/colors'
import logoImg from '../../assets/images/logo.png'

// GQL
const signupMutation = gql`
  mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateOfBirth: Date!) {
    signup(input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth}) {
      token
    }
  }
`

// Main Component
export class SignUp extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    loading: false,
    firstName: '',
    firstNameError: '',
    lastName: '',
    lastNameError: '',
    dateOfBirth: '',
    dateOfBirthError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    generalError: '',
    datePickerHeight: new Animated.Value(0)   
  }

  updateFirstName = (firstName) => {
    let generalError = ''
    this.setState({ firstName, generalError, firstNameError: '' })
  }

  updateLastName = (lastName) => {
    let generalError = ''
    this.setState({ lastName, generalError, lastNameError: '' })
  }

  updateDob = (dateOfBirth) => {
    let generalError = ''
    this.setState({ dateOfBirth: moment(dateOfBirth), generalError, dateOfBirthError: '' })
  }

  updateEmail = (email) => {
    let generalError = ''
    this.setState({ email, generalError, emailError: '' })
  }

  updatePassword = (password) => {
    let generalError = ''
    this.setState({ password, generalError, passwordError: '' })
  }

  handleFBLogin = handleFBLogin.bind(this)

  useFB = () => {
    this.setState({loading: true})
    this.handleFBLogin()
  }

  showDatePicker = (show) => {
    Animated.spring(this.state.datePickerHeight, {
      toValue: show ? 1 : 0,
      duration: 500,
      easing: Easing.linear,                
    }).start()
  }

  handleSignUp = async () => {
    let { firstName, lastName, dateOfBirth, email, password } = this.state

    email = email.toLowerCase()

    //handle validation
    if (!firstName) {
      return this.setState({firstNameError: FNAME_ERROR_MISSING})
    } else if (!lastName) {
      return this.setState({lastNameError: LNAME_ERROR_MISSING})
    } else if (!dateOfBirth) {
      return this.setState({dateOfBirthError: DOB_ERROR_MISSING})
    } else if (!email) {
      return this.setState({emailError: EMAIL_REQUIRED})
    } else if (!validateEmail(email)) {
      return this.setState({emailError: EMAIL_MALFORMED})
    } else if (!password) {
      return this.setState({passwordError: PASSWORD_REQUIRED})
    }

    this.props.signup(email, password, firstName, lastName, dateOfBirth)
      .then(async (response) => {
        let { data } = response
        await deviceStorage.saveItem(JWT, data.signup.token)
        // update App state with jwt and rerender
        this.props.screenProps.saveJWT(data.signup.token)
      }).catch((error) => {
        if (error && error.graphQLErrors.length >= 1) {
          if (error.graphQLErrors[0].message === USER_EMAIL_EXISTS) {
            let emailError = USER_EMAIL_EXISTS
            return this.setState({emailError})
          } 
        } else if (error && error.networkError) {
          console.log(error)
          let generalError = NETWORK_ERROR
          return this.setState({generalError})
        }
      })
  }

  render() {
    const {
      loading,
      firstName,
      firstNameError,
      lastName,
      lastNameError,
      dateOfBirth,
      dateOfBirthError,
      email, 
      password, 
      emailError, 
      passwordError,
      generalError,
      datePickerHeight 
    } = this.state

    const dpHeight = datePickerHeight.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 200]
    })

    const { goBack } = this.props.navigation

    return (
      loading ? 
      <LogoLoading />
      :
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View>
          <ScrollView keyboardShouldPersistTaps="always">
            <TouchableOpacity onPress={() => {goBack()}}>
              icon={<EvilIcons name="close" size={30} color="black" />}
            </TouchableOpacity>
            <Text style={styles.loginHeader}>Create new account</Text>
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <Image style={styles.logo} source={logoImg}/>
            </View>

            <TextInputField 
              innerOnChangeText={(firstName) => this.updateFirstName(firstName)}
              innerValue={firstName}
              innerOnFocus={() => {this.showDatePicker(false)}}
              innerReturnKeyType={"next"}
              innerOnSubmitEditing={this.lastNameInputWrapper && this.lastNameInputWrapper.getFocus}
              borderBottomColor={colors.gray}
              inputError={firstNameError || generalError}
              placeholderText="First name"
              inputIcon={"ios-person-outline"}
            />

            <TextInputField
              ref={(me) => this.lastNameInputWrapper = me}
              innerOnChangeText={(lastName) => this.updateLastName(lastName)} 
              innerOnFocus={() => {this.showDatePicker(false)}}
              innerValue={lastName}
              innerReturnKeyType={"next"}
              innerOnSubmitEditing={this.dobInputWrapper && this.dobInputWrapper.getFocus}
              borderBottomColor={colors.gray}
              inputError={lastNameError}
              placeholderText="Last name"
              inputIcon={"ios-person-outline"}
            />
            
            <TextInputField
              ref={(me) => this.dobInputWrapper = me}
              innerOnChangeText={(dateOfBirth) => this.updateDob(dateOfBirth)} 
              // dateOfBirth is moment object
              innerOnFocus={() => {Keyboard.dismiss(); this.showDatePicker(true)}}
              innerValue={(dateOfBirth && dateOfBirth.calendar())}
              innerReturnKeyType={"next"}
              innerOnSubmitEditing={this.emailInputWrapper && this.emailInputWrapper.getFocus}
              placeholderText="Date of Birth"
              borderBottomColor={colors.gray}
              inputError={dateOfBirthError}
              inputIcon={"calendar"}
              //notEditable={true}
            />

            <Animated.View style={[styles.datePicker, {height: dpHeight}]}>
              <DatePickerIOS
                // change moment to js date
                date={(dateOfBirth && dateOfBirth.toDate()) || moment().subtract(19, 'years').toDate()}
                mode='date'
                maximumDate={moment().toDate()}
                onDateChange={this.updateDob}
              />
            </Animated.View>

            <View style={{position: 'relative', top: -15}}>
              <TextInputField 
                ref={(me) => this.emailInputWrapper = me}
                innerOnChangeText={(email) => this.updateEmail(email)} 
                innerOnFocus={() => {this.showDatePicker(false)}}
                innerValue={email}
                innerReturnKeyType={"next"}
                innerOnSubmitEditing={this.passwordInputWrapper && this.passwordInputWrapper.getFocus}
                borderBottomColor={colors.gray}
                placeholderText="Email"
                inputError={emailError}
                inputIcon={"email-outline"}
              />
            </View>

            <View style={{position: 'relative', top: -15}}>
              <TextInputField
                ref={(me) => this.passwordInputWrapper = me}
                innerOnChangeText={(password) => this.updatePassword(password)}  
                innerValue={password}
                innerOnFocus={() => {this.showDatePicker(false)}}
                innerReturnKeyType={"done"}
                innerOnSubmitEditing={this.handleSignUp}
                borderBottomColor={colors.gray}
                inputError={passwordError}
                placeholderText="Password"
                inputType="password"
                secureInput={true}
                inputIcon={"unlock"}
              />
            </View>

            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <BasicButtonWithText
                onPress={this.handleSignUp}
                buttonText={"SIGN IN"} />
              <Text style = {styles.smallText}>  - OR LOGIN WITH - </Text>
              <BasicButtonWithText 
                onPress={this.useFB}
                buttonText={"FACEBOOK"} />
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
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
)(SignUp)

const styles = StyleSheet.create({
  wrapper:{
    display:'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  loginHeader: {
    textAlign:'center',
    fontSize: 28,
    fontWeight:'500',
  },
  logo: {
    width: 200,
    height:200,
  },
  datePicker: {
    position: 'relative',
    overflow: 'hidden',
    top: -20
  },
  smallText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize:10,
    color: '#666666',
  } 
})