import React from 'react'
import {View, TouchableOpacity, Animated, Dimensions} from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import GradientButton from '../components/GradientButton'
import ExperienceFullCardInfo from '../components/ExperienceFullCardInfo'
import Checkout from './Checkout'



export default class Experience extends React.Component {
  constructor () {
    super()
    this.state = {
      clicked: true,
      swipeUp: false
    }
  }
  handlePress = () => {
    this.setState({ clicked: !this.state.clicked, swipeUp: true })
  }
  render () {
    const item = this.props.navigation.state.params.experience
    const nav = this.props.navigation
    const previous = this.props.navigation.state.params.previous
    const isFavorite = this.props.navigation.state.params.isFavorite
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-between'}}>
        <View style={{flex: 1}}>
          {/**********************************************/}
          <ExperienceFullScreen swipeUp ={this.state.swipeUp} item={item} nav={nav} previous={previous} isFavorite={isFavorite} />
          {/**********************************************/}
          {this.state.clicked && this.state.swipeUp ? <Checkout /> : <ExperienceFullCardInfo item={item} />}
        </View>
        {/**********************************************/}
        <TouchableOpacity onPress={() =>  this.handlePress()}>
          <GradientButton text={this.state.clicked && this.state.swipeUp ? "EXPLORE" :"DETAILS" } upArrow round />
        </TouchableOpacity>
      </View>
    )
  }
}
