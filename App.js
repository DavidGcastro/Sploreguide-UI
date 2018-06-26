import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import StorybookUI from './storybook';


import LoginAppNavigator from './src/screens/LoginScreens'
import MainAppNavigator from './src/screens/MainAppComponents'
import deviceStorage from './src/services/deviceStorage'

const httpLink = new HttpLink({ uri: `http:${process.env.REACT_NATIVE_PACKAGER_HOSTNAME}:3000/graphql` })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      jwt: '',
      loading: true
    }

    this.loadJWT = deviceStorage.loadJWT.bind(this)
    this.deleteJWT = deviceStorage.deleteJWT.bind(this)
  }

  componentDidMount() {
    this.loadJWT()
  }

  saveJWT = (jwt) => {
    this.setState({jwt})
  }

  render () {
    let { jwt, loading } = this.state

    if (jwt) {
      return (
        <ApolloProvider client={client}>
          <MainAppNavigator screenProps={{deleteJWT: this.deleteJWT}}/>
        </ApolloProvider>
      )
    } else {
      return (
        <ApolloProvider client={client}>
          <LoginAppNavigator screenProps={{saveJWT: this.saveJWT}}/>
        </ApolloProvider>
      )
    }
  }
}

//module.exports = __DEV__ ? StorybookUI : App
module.exports = App