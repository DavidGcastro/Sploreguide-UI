import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Experience extends Component {
  render () {
    console.log(this.props.item)
    return <Text>Hello World</Text>
  }
}
