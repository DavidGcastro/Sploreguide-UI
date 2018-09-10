import React from 'react'
import {ScrollView, View, Text, Dimensions} from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import experiences from '../experiences'
let {width, height} = Dimensions.get('window')

export default class Experience extends React.Component {
  render () {
    // const item = this.props.navigation.state.params.experience
    const item = experiences[0]
    const nav = this.props.navigation.goBack
    return (
      <View>
        <View>
          <ExperienceFullScreen item={item} nav={nav} />
          <ScrollView pagingEnabled bounces={false} style={{height}}>
            <View style={{backgroundColor: 'white', height}}>
              <Text>Hello World</Text>
            </View>
            <View style={{ backgroundColor: 'white', height }}>
              <Text>Hello World</Text>
            </View>
            <View style={{ backgroundColor: 'white', height }}>
              <Text>Hello World</Text>
            </View>
          </ScrollView>
        </View>
      </View>

    )
  }
}
