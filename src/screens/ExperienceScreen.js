/*
* @Author: Abhi
* @Date:   2018-06-30 22:19:00
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-08 14:21:14
*/

import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Experience from '../components/Experience';
// import Previews from '../components/Previews'
// import { experiences } from '../data';

export default class ExperienceScreen extends Component {
  // static navigationOptions = ({ navigation }) =>{
  //   header:  null
  //  }

  // renderHeader() {
  //   return (
  //   	<View style={{width:100,height:100,backgroundColor:'red'}}>
  //   	</View>
  //    );
  // }

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
