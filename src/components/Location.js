import React from 'react'
import { Text, View, Dimensions } from 'react-native'
import styles from '../styles/location'

let { width } = Dimensions.get('window')

const Location = props => {
  return (
    <View style={[styles, {width: width * 0.88}]}>
      <Text style={{ color: 'rgba(132, 146, 166, 1)', fontSize: 16 }}>
        {props.location}
      </Text>
    </View>
  )
}

export default Location
