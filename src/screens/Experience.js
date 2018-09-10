import React from 'react'
import {ScrollView, View, TouchableOpacity} from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import experiences from '../experiences'
import ExploreInfoSection from '../components/ExploreInfoSection'
import GradientButton from '../components/GradientButton'
export default class Experience extends React.Component {
  render () {
    // const item = this.props.navigation.state.params.experience
    const item = experiences[0]
    const nav = this.props.navigation.goBack
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/**********************************************/}
        <ExperienceFullScreen item={item} nav={nav} />
        {/**********************************************/}
        <ScrollView pagingEnabled bounces={false}>
          <ExploreInfoSection hostImage={item.host.picture} heading={`Meet Your Host, ${item.host.name}`} content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
                Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.' />
          <ExploreInfoSection heading='What To Expect' content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.' />
          <ExploreInfoSection heading='Rendez-vous' content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.' />
          <ExploreInfoSection heading='What You Will Do' content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.' />
        </ScrollView>
        {/**********************************************/}
        <TouchableOpacity>
          <GradientButton text='Explore' />
        </TouchableOpacity>
      </View>

    )
  }
}
