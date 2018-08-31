import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class Tag extends Component {
  // Component prop types

  render () {
    const { fontSize, color } = this.props
    return (
      <View style={[styles.tag, { backgroundColor: color }]}>
        <Text
          style={[
            styles.tagText,
            { fontSize: fontSize }
          ]}>{`  ${this.props.activity_type.toUpperCase()}  `}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    zIndex: 1,
    backgroundColor: 'transparent'
  },
  tag: {
    height: 21,
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tagText: {
    fontFamily: 'SF-UI-Text-Semibold',
    color: '#ffffff'
  }
})
