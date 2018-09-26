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
      showCheckout: false,
      swipeUp: false,
      gradientText: 'VIEW DATES',
      screenStage: {

      }
    }
  }
  showCheckout = (show) => {
    this.setState({ showCheckout: show })
  }
  componentDidMount(){
    this.setState({showCheckout: false})
  }
  render () {

    const item = this.props.navigation.state.params.experience
    const nav = this.props.navigation
    const previous = this.props.navigation.state.params.previous
    const isFavorite = this.props.navigation.state.params.isFavorite
    return (
      <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'space-between'}}>
          {/**********************************************/}
          <ExperienceFullScreen swipeUp={this.state.swipeUp} item={item} nav={nav} previous={previous} isFavorite={isFavorite} />
          {/**********************************************/}
          {this.state.showCheckout  ? <Checkout nav={nav} showCheckout={this.showCheckout}/> : <ExperienceFullCardInfo item={item} />}
          {/**********************************************/}
        { (this.state.showCheckout) ? <View/> :
        <TouchableOpacity onPress={() =>  this.showCheckout(true)}>
          <GradientButton text={this.state.gradientText} upArrow round />
        </TouchableOpacity>
        }
      </View>

    )
  }
}
