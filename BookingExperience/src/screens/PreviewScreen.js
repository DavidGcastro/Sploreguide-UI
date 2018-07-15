/*
* @Author: Abhi
* @Date:   2018-06-30 22:19:00
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-07 15:22:17
*/

import React, { Component } from 'react';
import Previews from '../components/Previews'
import { experiences } from '../data';
import {
	Text
} from 'react-native'

export default class PreviewScreen extends Component {
	render() {
		return (
			<Previews experiences={experiences} onOpen={(experience) => {
				this.props.navigation.navigate('Experience', {experience})
				}
			}/>
		);
	}
}
