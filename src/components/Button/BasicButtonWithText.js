import React from 'react'
import propTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  defaultStyle: {
    width: 300,
    backgroundColor: '#a76eff',
    borderRadius: 3,
    marginVertical: 7,
    paddingVertical: 14
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  }
})

export default function BasicButtonWithText (props) {
  let { buttonText, onPress } = props
  return (
    <TouchableOpacity style={styles.defaultStyle} onPress={onPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  )
}

BasicButtonWithText.propTypes = {
  onPress: propTypes.func.isRequired,
  buttonText: propTypes.node.isRequired
}
