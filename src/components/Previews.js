import React, { Component } from 'react';
import {
  ScrollView,
  FlatList,
  StyleSheet,
  View,
  SafeAreaView,
  Text
} from 'react-native';
import PreviewCard from './PreviewCard';
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import experiences from '../experiences';

export default class Previews extends Component {
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flex: 1
        }}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          {experiences.map((experience, index) => (
            <PreviewCard experience={experience} key={index} />
          ))}
        </ScrollView>
      </View>
    );
  }
}
