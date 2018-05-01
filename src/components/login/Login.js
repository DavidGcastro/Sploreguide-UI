import React, { Component } from 'react'
import { Button, Dimensions, StyleSheet, Text, TextInput, View, AsyncStorage } from 'react-native'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import PropTypes from 'prop-types'

// GQL
const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
  login(input:{email: $email, password: $password}) {
    token
    user {
      firstName
      lastName
      email
    }
  }
}
`

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
  logInButton: {
    width: Dimensions.get('window').width * 0.4,
    backgroundColor: '#fff',
    borderRadius: 30,
  },
  fyg: {
    opacity: 0.5,
  },
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
    password: ''
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

  handleLogin = () => {
    const { email, password } = this.state
    this.props.login(email, password)
      .then((response) => { console.log(response) })
      .catch((response) => { console.log(response) })

      /* The returned response looks like object below -- save JWT in Async Storage and user object appropriately
      Object {
        "data": Object {
          "login": Object {
            "__typename": "AuthPayload",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWRiYjI2MDY5ZTM5ZDMxZTAzZDQxYTciLCJlbWFpbCI6Imt3YWR3b25AZ21haWwuY29tIiwiaWF0IjoxNTI1MjE4NTQzfQ.-Zb8vdCegw3nBySZYTJNTX5cEdutqHM4HVcfUnOd438",
            "user": Object {
              "__typename": "User",
              "email": "kwadwon@gmail.com",
              "firstName": "Kwadwo",
              "lastName": "Nyarko",
            },
          },
        },
      }

      */
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.fbButton, styles.row]}>
          <Button
            title="LOG IN WITH FACEBOOK"
            color="#fff"
            onPress={() => {}}
          />
        </View>

        <View style={styles.row}>
          <LoginText>or</LoginText>
        </View>

        <View>
          {/* eslint-disable*/}
          <TextInput
            style={[styles.row, styles.textInput]}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            placeholder="Email"
            placeholderTextColor="#fff"
            returnKeyType={ "next" }
            onSubmitEditing={(event) => {
              this.refs.password.focus()
            }}
          />
          <TextInput
            ref='password'
            style={[styles.row, styles.textInput]}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            placeholder="Password"
            placeholderTextColor="#fff"
            returnKeyType="done"
            secureTextEntry
          />
          {/* eslint-enable */}
        </View>

        <View style={[styles.row, styles.logInButton]}>
          <Button
            title="LOG IN"
            onPress={this.handleLogin}// if authenticate will be able to go to home, else nothing
            color="rgb(184, 0, 43)"
          />
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
    )
  }
}
// Main Component

// PropTypes
LoginText.propTypes = {
  children: PropTypes.string.isRequired,
}

export default graphql(
  loginMutation,
  {
    props: ({ mutate }) => ({
      login: (email, password) => mutate({ variables: { email, password } }),
    }),
  },
)(Login)

