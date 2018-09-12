import React from 'react'
import { LinearGradient } from 'expo'
import { Dimensions, View, Text } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
const { width } = Dimensions.get('window')

const GradientButton = props => {
  return (
    <LinearGradient
      style={{ borderRadius: 10, height: 60, justifyContent: 'center' }}
      colors={['rgba(48, 35, 174, 1)', 'rgba(83, 160, 253, 1)']}
      start={[0, 0.5]}
      end={[0.5, 1]}>
      >
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          justifyContent: 'center'
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'SF-UI-Text-Medium',
            letterSpacing: 2
          }}>
          {props.text}
        </Text>
        <View style={{alignSelf: 'flex-end'}}>
          <Ionicons style={{left: width * 0.3}} name='ios-arrow-up' size={20} color='white' />
        </View>
      </View>
    </LinearGradient>
  )
}

export default GradientButton
