import React, { Component } from 'react';
import { Text, Image, TextInput, View, Dimensions } from 'react-native';
let { width } = Dimensions.get('window');

export default class SearchInput extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end'
        }}>
        <Image
          resizeMode="contain"
          style={{ width: 25, height: 30 }}
          source={require('../assets/img/Search.png')}
        />

        <TextInput
          placeholder="Search by City or Activity"
          style={{
            paddingLeft: 10,
            fontSize: 26,
            color: 'rgba(48, 55, 64, 1)',
            fontWeight: '500',
            width: '100%'
          }}
        />
      </View>
    );
  }
}
