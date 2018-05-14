import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import LoginAppNavigator from './src/components/LoginComponents'
import MainAppNavigator from './src/components/MainAppComponents'
import deviceStorage from './src/services/deviceStorage'

const httpLink = new HttpLink({ uri: 'http:192.168.1.2:3000/graphql' })
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

export default class App extends React.Component {
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
