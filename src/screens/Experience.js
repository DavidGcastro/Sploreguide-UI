import React from 'react'
import { View, TouchableOpacity, Animated, Dimensions } from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import GradientButton from '../components/GradientButton'
import ExperienceFullCardInfo from '../components/ExperienceFullCardInfo'
import Checkout from './Checkout'
const dummyData = {
  guests: [
    { adult: 2, price: 100 },
    { teen: 1, price: 80 },
    { children: 2, price: 20 },
    { infant: 2, price: 10 }
  ],
  image: require('../assets/img/experiences/ecuador.jpg'),
  experienceName: 'Ecuador: Living Among Giants',
  date: 'September 25, 2019',
  time: '7:00PM - 9:00PM',
  host: 'Juan Paredes'
}


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
