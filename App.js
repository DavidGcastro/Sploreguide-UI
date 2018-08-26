import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import LoginNavigator from './src/navigators/LoginNavigator';
import RootNavigator from './src/navigators/RootNavigator';
import deviceStorage from './src/services/deviceStorage';

const httpLink = new HttpLink({
  uri: `http:${process.env.REACT_NATIVE_PACKAGER_HOSTNAME}:3000/graphql`
});

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    httpLink
  ]),
  cache: new InMemoryCache()
});

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
      jwt: '',
      loading: true
    };

    this.loadJWT = deviceStorage.loadJWT.bind(this);
    this.deleteJWT = deviceStorage.deleteJWT.bind(this);
  }

  async componentDidMount() {
    await Font.loadAsync({
      'SF-UI-Text-Regular': require('./src/assets/fonts/SF-UI-Text-Regular.otf'),
      'SF-UI-Text-Medium': require('./src/assets/fonts/SF-UI-Text-Medium.otf'),
      'SF-UI-Text-Light': require('./src/assets/fonts/SF-UI-Text-Light.otf'),
      'SF-UI-Text-Bold': require('./src/assets/fonts/SF-UI-Text-Bold.otf'),
      'SF-UI-Text-Heavy': require('./src/assets/fonts/SF-UI-Text-Heavy.otf'),
      'SF-UI-Text-Semibold': require('./src/assets/fonts/SF-UI-Text-Semibold.otf')
    });
    this.setState({ fontLoaded: true });
    this.loadJWT();
  }

  saveJWT = jwt => {
    this.setState({ jwt });
  };

  render() {
    let { jwt, loading, fontLoaded } = this.state;
    if (!fontLoaded || loading) {
      return <AppLoading />;
    } else {
      if (jwt) {
        return (
          <ApolloProvider client={client}>
            <RootNavigator screenProps={{ deleteJWT: this.deleteJWT }} />
          </ApolloProvider>
        );
      } else {
        return (
          <ApolloProvider client={client}>
            <RootNavigator screenProps={{ deleteJWT: this.deleteJWT }} />

          </ApolloProvider>
        );
      }
    }
  }
}
