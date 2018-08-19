/*
* @Author: Abhi
* @Date:   2018-06-29 15:10:03
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-10 13:56:49
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import PropTypes from 'prop-types';
import { defaultStyles } from '../../styles/styles';

export default class Reviews extends Component {
	// Component prop types
	static propTypes = {
		data	: PropTypes.array.isRequired,
		style	: PropTypes.object.isRequired
	}

	load() {
		let data = this.props.data;
		let sum = 0;
		let avg = 0;
		let n = data.length;
		for (var i = 0; i < n; i++) {
			sum += data[i].stars;
		} avg = sum/n;

		return [avg, n];
	}

	render() {
		let avg, n;
		[avg, n] = this.load()
		return <Text style={this.props.style}>{`${avg} stars - ${n} Reviews`}</Text>
	}
}