import React, { Component } from 'react';
import MainSearch from '../components/MainSearch';
import { Text, View } from 'react-native';
import styles from '../styles/styles';

export default class Landing extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignContent: 'center',
          alignItems: 'center'
        }}>
        <MainSearch />
        <View>
          <Text>Content Goes Here </Text>
        </View>
      </View>
    );
  }
}
