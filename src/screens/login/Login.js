import React, { Component } from 'react'
import { 
  Button, StatusBar,
  StyleSheet,
  Text, View, Image,
  TouchableOpacity,
  Keyboard, ScrollView, 
  KeyboardAvoidingView } from 'react-native'
import { Constants } from 'expo'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import { EvilIcons } from '@expo/vector-icons'
import { LogoLoading } from '../../components/Loading'
import { handleFBLogin } from '../../services/facebook'
import deviceStorage from '../../services/deviceStorage'
import { JWT,
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  EMAIL_MALFORMED,
  GRAPHQL_ERROR_NO_USER_FOUND,
  GRAPHQL_ERROR_INVALID_PASSWORD,
  NETWORK_ERROR } from '../../constants'
import { validateEmail } from '../../helpers/validators'
import { TextInputField } from '../../components/Input'
import { BasicButtonWithText } from '../../components/Button'
import colors from '../../styles/colors'
import placeholderImg from '../../assets/images/placeholder.png' 
import logoImg from '../../assets/images/logo.png'

// Start GQL mutations
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
// End GQL mutations

class Login extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    generalError: '',
    loading: false
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
        if (error && error.graphQLErrors.length >= 1) {
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

  render() {
    let { 
      emailError,
      generalError,
      passwordError,
      loading 
    } = this.state

    let profileImgSrc = (true) ? placeholderImg : logoImg
    const { goBack } = this.props.navigation

    return ( loading ? 
      <LogoLoading />
      :
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View>
          <StatusBar barStyle='dark-content' />
          <ScrollView>
            <TouchableOpacity onPress={() => {goBack()}}>
              icon={<EvilIcons name="close" size={30} color="black" />}
            </TouchableOpacity>
            <Text style={styles.loginHeader}>Log in</Text>
            <View style={styles.emptyRow} />
            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'}}>
              <Image style={styles.loginImage}
                source={profileImgSrc}/>
            </View>
            <View style={styles.emptyRow} />
            <TouchableOpacity style={{height: 20}}>
              <Text style={styles.forgotPassword}> Forgot your password ? </Text>
            </TouchableOpacity>
            <View style={styles.emptyRow} />
            <View style={styles.emptyRow} />
            <View style={styles.emptyRow} />

            <TextInputField
              innerOnChangeText={(email) => this.updateEmail(email)}
              innerValue={this.state.email}
              innerReturnKeyType={"next"}
              innerOnSubmitEditing={this.passwordInputWrapper && this.passwordInputWrapper.getFocus}
              borderBottomColor={colors.gray}
              inputError={emailError || generalError}
              inputIcon="email-outline"
              placeholderText="Email"/>

            <TextInputField
              ref={(me) => this.passwordInputWrapper = me}
              innerOnChangeText={password => this.updatePassword(password)}
              innerValue={this.state.password}
              innerReturnKeyType={"done"}
              innerOnSubmitEditing={this.handleLogin}
              borderBottomColor={colors.gray}
              inputError={passwordError}
              inputIcon={"unlock"}
              placeholderText="Password"
              secureInput={true}
            />

            <View style={styles.emptyRow} />
            <View style={styles.emptyRow} />

            <View style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'}}>

              <BasicButtonWithText
                onPress={this.handleLogin}
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

const styles = StyleSheet.create({
  wrapper:{
    display:'flex',
    flex: 1,
    paddingTop: Constants.statusBarHeight
  },
  emptyRow: {
    height: 20
  },
  loginHeader: {
    textAlign:'center',
    fontSize: 28,
    fontWeight:'500',
  },
  loginImage: {  
    width: 130,
    height:130,
  },
  forgotPassword: {
    fontSize: 12,
    textAlign:'center'
  },
  smallText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize:10,
    color: '#666666',
  } 
})

