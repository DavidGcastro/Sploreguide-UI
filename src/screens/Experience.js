import React from 'react'
import {View, TouchableOpacity, ScrollView} from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import GradientButton from '../components/GradientButton'
import ExperienceFullCardInfo from '../components/ExperienceFullCardInfo'

export default class Experience extends React.Component {
  constructor () {
    super()
    this.state = {
      clicked: false
    }
  }
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
        <TouchableOpacity onPress={() => this.setState({ clicked: !this.state.clicked })}>
          <GradientButton text='EXPERIENCE' upArrow round />
        </TouchableOpacity>
      </View>
    )
  }
}
