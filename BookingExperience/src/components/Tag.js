/*
* @Author: Abhi
* @Date:   2018-07-14 20:47:40
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-14 22:37:15
*/

/*
* @Author: Abhi
* @Date:   2018-07-09 14:15:21
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-14 19:41:51
*/

import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated
} from 'react-native';

import { defaultStyles, experienceStyle } from '../styles/styles';

import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import MeasureText from 'react-native-text-size';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

// const HeaderPlaceholder = <View style={{flex: 0, height: 100, width: '100%'}} />;

export default class Tag extends Component {

	// Component prop types
	static propTypes = {
		activity_type	:	PropTypes.string.isRequired,
		color					: PropTypes.string.isRequired,
		fontSize			:	PropTypes.number.isRequired
	};

  render() {
  	const { activity_type, fontSize, color } = this.props;
		return (
      <View style={[styles.tag, { backgroundColor: color }]}>
        <Text style={[styles.tagText, { fontSize: fontSize }]}>{`  ${this.props.activity_type.toUpperCase()}  `}</Text>
      </View>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex:1, 
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  tag : {
      height          :   21,
      borderBottomLeftRadius  : 3,  
      borderBottomRightRadius : 3,
      borderTopLeftRadius   : 3,
      borderTopRightRadius  : 3,
      borderBottomLeftRadius  : 3,
      justifyContent: 'center',
      alignItems: 'center'
  }, 
  tagText : {
    fontFamily  : 'SF-UI-Text-Semibold',
    color   : '#ffffff'
  }
});
