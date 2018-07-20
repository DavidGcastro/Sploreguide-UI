import React, { Component } from 'react';
import { View } from 'react-native';
import SearchInput from '../components/SearchInput';
import InlneIcon from '../components/InlineIcon';

export default class Search extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          justifyContent: 'space-around',
          alignItems: 'center',
          alignContent: 'center'
        }}>
        <SearchInput />
        <InlneIcon IconTag="EvilIcons" iconName="location" label="Location" />
        <InlneIcon IconTag="FontAwesome" iconName="bolt" label="Activities" />
        <InlneIcon IconTag="FontAwesome" iconName="money" label="Price Range" />
        <InlneIcon IconTag="EvilIcons" iconName="clock" label="Dates" />

      </View>
    );
  }
}
