/*
* @Author: Abhi
* @Date:   2018-06-27 17:43:40
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-26 12:22:17
*/

import React, { Component } from 'react';
import { Font, AppLoading } from 'expo';
import MainNavigator from './navigators/MainNavigator';
import PreviewNavigator from './navigators/PreviewNavigator';

export default class App extends Component {
  state = {
    fontLoaded: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'SF-UI-Text-Regular': require('./assets/fonts/SF-UI-Text-Regular.otf'),
      'SF-UI-Text-Medium': require('./assets/fonts/SF-UI-Text-Medium.otf'),
      'SF-UI-Text-Light': require('./assets/fonts/SF-UI-Text-Light.otf'),
      'SF-UI-Text-Bold': require('./assets/fonts/SF-UI-Text-Bold.otf'),
      'SF-UI-Text-Heavy': require('./assets/fonts/SF-UI-Text-Heavy.otf'),
      'SF-UI-Text-Semibold': require('./assets/fonts/SF-UI-Text-Semibold.otf')
    });
    this.setState({ fontLoaded: true });
  }

  render() {
    return this.state.fontLoaded ? <PreviewNavigator /> : <AppLoading />;
  }
}
