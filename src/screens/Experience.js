import { Dimensions, ScrollView, Image, View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
const { width, height } = Dimensions.get('window')
export default class Experience extends React.Component {
  render () {
    let item = this.props.navigation.state.params.experience

    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          bounces={false}
          style={{ width, height }}
          horizontal pagingEnabled >
          <Image source={item.media} style={{ height }} />
          <Image source={item.images[0]} style={{ height, width }} />
          <Image source={item.images[1]} style={{ height, width }} />
          <Image source={item.images[2]} style={{ height, width }} />
        </ScrollView>
        <ExperienceFullScreen item={item} nav={this.props} />
      </View>

    )
  }
}

// <LinearGradient
//   pointerEvents='none'
//   colors={['transparent', 'rgba(0,0,0,1.0)']}
//   start={[0.5, 0.2]}
//   end={[0.5, 1.0]}
//   style={{}}
// >
