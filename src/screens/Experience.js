import React from 'react'
import {View, TouchableOpacity} from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import ExperienceFullCardInfo from '../components/ExperienceFullCardInfo'
import GradientButton from '../components/GradientButton'
export default class Experience extends React.Component {
  render () {
    const item = this.props.navigation.state.params.experience
    const nav = this.props.navigation
    const previous = this.props.navigation.state.params.previous
    const isFavorite = this.props.navigation.state.params.isFavorite
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-between'}}>
        {/**********************************************/}
        <ExperienceFullScreen item={item} nav={nav} previous={previous} isFavorite={isFavorite} />
        {/**********************************************/}
        <ExperienceFullCardInfo item={item} />
        {/**********************************************/}
        <TouchableOpacity>
          <GradientButton text='Explore' round={0} />
        </TouchableOpacity>
      </View>
    )
  }
}
