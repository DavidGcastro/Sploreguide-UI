/*
* @Author: Abhi
* @Date:   2018-06-27 17:43:40
* @Last Modified by:   Abhi
* @Last Modified time: 2018-06-30 22:50:21
*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Font } from 'expo';
import PreviewNavigator from './navigators/PreviewNavigator';
// import Movies from './components/Movies';
// import NavigationExperimental, { Navigator } from 'react-native-deprecated-custom-components';

// const RouteMapper = (route, navigator) => {
//   console.log(route.name);
//   if (route.name === 'movies') {
//     return <Movies navigator={navigator} />;
//   } else if (route.name === 'experience') {
//     console.log("heyo");
//   }
// };

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
    return this.state.fontLoaded ? (
      /*
          <Text style={{fontFamily: 'SF-UI-Text-Regular', fontSize: 40}}>
            Hello World
          </Text> 
          */

      /*
          <Navigator
          // Default to movies route
          initialRoute={{ name: 'movies' }}
          // Use FloatFromBottom transition between screens
          configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
          // Pass a route mapper functions
          renderScene={RouteMapper}
          />
          */
      <PreviewNavigator />
    ) : (
      <View />
    );
  }
}
