import React from 'react'
import { View, TouchableOpacity, Animated, Dimensions } from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import GradientButton from '../components/GradientButton'
import ExperienceFullCardInfo from '../components/ExperienceFullCardInfo'
import Checkout from './Checkout'



export default class Experience extends React.Component {
  constructor() {
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
  componentDidMount () {
    this.setState({ showCheckout: false })
    _storeData = async () => {
      try {
        await AsyncStorage.setItem('image', image);
      } catch (error) {
       console.log(error)
      }
    }
  }
  render () {
    const item = this.props.navigation.state.params.item
    const nav = this.props.navigation
    const previous = this.props.navigation.state.params.previous
    const isFavorite = this.props.navigation.state.params.isFavorite
    let title = this.props.navigation.state.params.item.title
    let image = this.props.navigation.state.params.item.media[0]

    return (
      <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'space-between' }}>
        {/**********************************************/}
        <ExperienceFullScreen swipeUp={this.state.swipeUp} item={item} nav={nav} previous={previous} isFavorite={isFavorite} />
        {/**********************************************/}
        {this.state.showCheckout ? <Checkout nav={nav} title={title} image={image} showCheckout={this.showCheckout} /> : <ExperienceFullCardInfo item={item} />}
        {/**********************************************/}
        {(this.state.showCheckout) ? <View /> :
          <TouchableOpacity onPress={() => this.showCheckout(true)}>
            <GradientButton text={this.state.gradientText} upArrow round />
          </TouchableOpacity>
        }
      </View>

    )
  }
}
