import { Dimensions, ScrollView, Image, View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo'
import experiences from '../experiences'
const { width, height } = Dimensions.get('window')
let experience = experiences[0]
export default class Experience extends React.Component {
  render () {
    return (
      <View>
        <ScrollView
          horizontal pagingEnabled >
          <LinearGradient
            style={{flex: 1}}
            colors={['rgba(255, 255, 255, 0)', 'rgba(0,0,0,1)']}

          >
            <Image source={experience.images[0]} style={{ height, width }} />
          </LinearGradient>
        </ScrollView>
        <View style={{ position: 'absolute' }}>
          <Text>Page Content</Text>
        </View>
      </View>
    )
  }
}

// source = { experience.media }
