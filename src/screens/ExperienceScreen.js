import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Experience from '../components/Experience';

export default class ExperienceScreen extends Component {
  onBackPress = () => {
    this.props.navigation.goBack();
  };
  render() {
    const { navigation } = this.props;
    const experience = navigation.getParam('experience', null);

    return (
      <Experience experience={experience} onBackPress={this.onBackPress} />
    );
  }
}
