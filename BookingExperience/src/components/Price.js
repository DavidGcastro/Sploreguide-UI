/*
* @Author: Abhi
* @Date:   2018-07-14 23:07:48
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-14 23:12:12
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';


export default class Price extends Component {
	// Component prop types
	static propTypes = {
		price: PropTypes.number.isRequired,
	}

	render() {
		return <Text style={styles.text}>{`$${this.props.price}`}</Text>
	}
}

const styles = StyleSheet.create({
  text: {
    fontFamily  : 'SF-UI-Text-Regular',
    fontSize  : 36,
    color   : '#ffffff',
  }
});