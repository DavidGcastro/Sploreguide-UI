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
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={{height}} >
          <View>
            <ExperienceFullScreen item={item} nav={nav} />
            <ScrollView pagingEnabled bounces={false}>
              <View style={{backgroundColor: 'blue', height}}>
                <Text>Hello World</Text>
              </View>
              <View style={{ backgroundColor: 'green', height }}>
                <Text>Hello World</Text>
              </View>
              <View style={{ backgroundColor: 'lightgrey', height }}>
                <Text>Hello 5</Text>
              </View>
            </ScrollView>
            <View style={{flex: 1}}>
              <Text>Hello</Text>
            </View>
          </View>
        </View>
      </View>

    )
  }
}
