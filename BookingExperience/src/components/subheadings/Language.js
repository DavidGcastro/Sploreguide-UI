/*
* @Author: Abhi
* @Date:   2018-07-15 03:09:43
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-15 03:15:11
*/

import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';
import { defaultStyles } from '../../styles/styles';

export default class Duration extends Component {
  titleCase(str) {
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }
  // Component prop types
  static propTypes = {
    language: PropTypes.array.isRequired,
    style: PropTypes.object.isRequired
  };

  render() {
    return (
      <Text style={this.props.style}>{`${this.titleCase(
        this.props.language[0]
      )}`}</Text>
    );
  }
}
