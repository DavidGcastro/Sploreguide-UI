/*
* @Author: Abhi
* @Date:   2018-07-15 03:07:46
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-15 03:10:17
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { defaultStyles } from '../../styles/styles';

export default class Duration extends Component {
	// Component prop types
	static propTypes = {
		duration	: PropTypes.number.isRequired,
		style		: PropTypes.object.isRequired
	}

	render() {
		return <Text style={this.props.style}>{`${this.props.duration}:00`}</Text>
	}
}