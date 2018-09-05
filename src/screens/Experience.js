import React from 'react'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import {ScrollView, View, Text} from 'react-native'
export default class Experience extends React.Component {
  render () {
    const item = this.props.navigation.state.params.experience
    return (

      <ExperienceFullScreen item={item} />

    )
  }
}
