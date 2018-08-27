import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import PreviewCard from './PreviewCard';
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';
import experiences from '../experiences';

export default class Previews extends Component {
  render() {
    return (
      <View style={styles.container}>
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    ...ifIphoneX(
      {
        paddingTop: getStatusBarHeight() - 20
      },
      {
        paddingTop: 30,
        paddingBottom: 0
      }
    )
  }
});
