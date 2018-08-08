import React from 'react'
import { storiesOf } from '@storybook/react-native'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Welcome from '../../../src/screens/welcome/Welcome'
import SignUp from '../../../src/screens/signUp/SignUp'
import LogIn from '../../../src/screens/login/Login'
import Explore from '../../../src/screens/explore/Explore'

const httpLink = new HttpLink({ uri: `http:${process.env.REACT_NATIVE_PACKAGER_HOSTNAME}:3000/graphql` })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

storiesOf('Screen', module)
  .add('Welcome', () => (
    <ApolloProvider client={client}>
      <Welcome />
    </ApolloProvider>
  ))
  .add('Sign Up', () => (
    <ApolloProvider client={client}>
      <SignUp navigation={{goBack: () => {}}} />
    </ApolloProvider>
  ))
  .add('Log In', () => (
    <ApolloProvider client={client}>
      <LogIn navigation={{goBack: () => {}}} />
    </ApolloProvider>
  ))
  .add('Explore', () => (
    <ApolloProvider client={client}>
      <Explore />
    </ApolloProvider>
  ))
