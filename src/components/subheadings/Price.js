/*
* @Author: Abhi
* @Date:   2018-06-29 15:10:03
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-10 13:57:21
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { defaultStyles } from '../../styles/styles';

export default class Price extends Component {
	// Component prop types
	static propTypes = {
		price: PropTypes.string.isRequired,
		style: PropTypes.object.isRequired
	}

	render() {
		return <Text style={this.props.style}>{this.props.price}</Text>
	}
}

