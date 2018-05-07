import React from 'react'
import { StackNavigator } from 'react-navigation'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

//Question: Why doesn't Login have curly braces
import { Welcome } from './src/components/welcome/Welcome'
import { Home } from './src/components/home/Home'
import Login from './src/components/login/Login'
import { SignUp } from './src/components/sginUp/SignUp'


const httpLink = new HttpLink({ uri: 'http:192.168.1.142:3000/graphql' })
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

const AppNavigator = StackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Home: { screen: Home }
  },
  {
    initialRouteName: 'Welcome'
  }
)

export default class App extends React.Component {
  render () {
    return (
      <ApolloProvider client={client}>
        <AppNavigator />
      </ApolloProvider>
    )
  }
}
