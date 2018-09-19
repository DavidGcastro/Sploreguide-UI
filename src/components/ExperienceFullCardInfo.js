import React from 'react'
import ExploreInfoSection from './ExploreInfoSection'
import {ScrollView} from 'react-native'

const ExperienceFullCardInfo = props => {
  let {item} = props
  let {profilePicture} = item.host

  return <ScrollView bounces={false}>
    <ExploreInfoSection hostImage={profilePicture} border heading={`Meet Your Host, ${item.host.firstName}`} content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
          Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque in ipsum id orci porta dapibus.' />
    <ExploreInfoSection border heading='What To Expect' content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.' />
    <ExploreInfoSection border heading='Rendez-vous' content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque in ipsum id orci porta dapibus.' />
    <ExploreInfoSection border={false} heading='What You Will Do' content='Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat. Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
          Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque in ipsum id orci porta dapibus.' />
  </ScrollView>
}

export default ExperienceFullCardInfo
