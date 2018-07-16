import React, { Component } from 'react';
import { Text, View } from 'react-native';
import defaultStyles from '../styles/styles';

export default class Login extends Component {
  render() {
    return (
      <View style={defaultStyles.parent}>
        <Text> Hello World </Text>
      </View>
    );
  }
}
