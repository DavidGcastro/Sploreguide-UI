import React, {Component} from 'react'
import { Dimensions, View, Text, TouchableOpacity, ScrollView, Image, PanResponder, Animated, StyleSheet } from 'react-native'
import landingStyles from '../styles/landingStyles'
import { LinearGradient } from 'expo'
import { Ionicons, SimpleLineIcons, Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import GradientBorder from '../components/GradientButton'
import Stars from '../components/Stars'
import Heart from '../components/Heart'
import { formatLocationObject, formatReviewsCountText, formatDuration } from '../helpers/strings'
import { Query, Mutation } from 'react-apollo'
import { UPDATE_FAVORITES } from '../mutations'
const { width, height } = Dimensions.get('window')

let totalHeight = new Animated.Value(height)
let fade = new Animated.Value(1)
let paddingBelow = new Animated.Value(0)
let _panResponder = PanResponder.create({
  // Ask to be the responder: Does this view want to become responder on the start of a touch?
  onStartShouldSetPanResponder: (evt, gestureState) => true,
  onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
  // Called for every touch move on the View when it is not the responder: does this view want to "claim" touch responsiveness?
  onMoveShouldSetPanResponder: (evt, gestureState) => true,
  onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
  onPanResponderTerminationRequest: (evt, gestureState) => true,
  onPanResponderRelease: (evt, gestureState) => {
    if (gestureState.dy < -20) {
      Animated.parallel([
        Animated.timing(totalHeight, {
          toValue: height / 3 + 12,
          duration: 200
        }),
        Animated.timing(paddingBelow, {
          toValue: 45,
          duration: 200
        }),
        Animated.timing(fade, {
          toValue: 0,
          duration: 200
        })
      ]).start()
    }
    if (gestureState.dy > 20) {
      Animated.parallel([
        Animated.timing(totalHeight, {
          toValue: height,
          duration: 200
        }),
        Animated.timing(paddingBelow, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(fade, {
          toValue: 1,
          duration: 200
        })
      ]).start()
    }
  }
})
export default class ExperienceFullScreen extends Component {

  state = {
    currentImageIndex: 0,
    isFavorite: false
  }

  componentDidMount() {
    this.setState({isFavorite: this.props.isFavorite})
  }

  updateFavoriteState = (favoritesList, itemId) => {
    this.setState({isFavorite: favoritesList.includes(itemId) })
  }

  render () {
    let { isFavorite } = this.state
    let { item, nav, previous } = this.props
    let paginationStyle = StyleSheet.create({
      active: {
        height: 0.5, width: 55, backgroundColor: 'white'
      },
      inactive: {
        height: 0.5, width: 55, backgroundColor: 'grey'

      }
    })
    return (
      <Animated.View style={{height:totalHeight, width}}>
        <ScrollView
          centerContent= {true}
          {..._panResponder.panHandlers}
          onScroll={x => {
            let currentOffset = x.nativeEvent.contentOffset.x
            let total = width * 4
            let currentImage = Math.ceil(currentOffset / total * 4)
            this.setState({currentImageIndex: currentImage})
          }}
          scrollEventThrottle={4}
          bounces={false}
          style={{  }}
          horizontal pagingEnabled >
          {
            item.media.map((url, index) => <Animated.Image key={index} source={{uri: url}} style={{height: '100%', width}} />)
          }
        </ScrollView>
        <LinearGradient
          pointerEvents='box-none'
          colors={['transparent', 'rgba(0,0,0,1.0)']}
          start={[0.5, 0.2]}
          end={[0.5, 1.0]}
          style={{  width, position: 'absolute' }}
        >
          {/* PARENT */}
          <Animated.View
            pointerEvents='box-none'
            style={{height:totalHeight }}>
            <View
              pointerEvents='box-none' style={[landingStyles.topContainer, {flex: 1, alignItems: 'flex-start'}]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => nav.navigate(previous)}>
                  <Feather
                    name={'arrow-left'}
                    size={30}
                    color={'white'}
                    style={{ paddingRight: 15 }} x
                  />
                </TouchableOpacity>
                <Text style={[landingStyles.activityType, { padding: 2 }]}>
                  {item.activityType.toUpperCase()}
                </Text>
              </View>
              <Animated.Text style={[landingStyles.price, { opacity: fade }]}>
                ${item.basePricePerPerson}
              </Animated.Text>
            </View>

            {/* Bottom */}
            <View pointerEvents='box-none' style={{
              flex: 1,
              borderLeftWidth: 5,
              borderLeftColor: 'rgba(227, 60, 54, 1)'
            }}
            >
              <View
                pointerEvents='box-none'
                style={{
                  paddingHorizontal: 20, flex:1
                }}>
                {/********************************************************/}
                <View style={[landingStyles.bottomContainerIcons, {
                  paddingBottom: 0, paddingHorizontal: 0
                }]}>
                  <TouchableOpacity>
                    <Ionicons
                      name={'ios-share-outline'}
                      size={25}
                      color={'white'}
                      style={{ paddingRight: 15 }}
                    />
                  </TouchableOpacity>
                  <Mutation mutation={UPDATE_FAVORITES}>
                  { (updateUserFavorites, { data }) => (
                    <TouchableOpacity
                      onPress={() => {
                        updateUserFavorites({ variables: { experienceId: item._id } })
                        .then(({data: { updateUserFavorites: {favorites}}}) =>
                          (this.updateFavoriteState(favorites, item._id)))
                      }}
                    >
                      <Heart isFavorite={isFavorite} />
                    </TouchableOpacity>
                  )
                  }
                </Mutation>
                </View>
                {/********************************************************/}
                <View pointerEvents='none' style={{ justifyContent: 'space-evenly', flex: 1}}>
                  <Animated.View pointerEvents='none' style={{}}>
                    <Text style={[landingStyles.location, { paddingBottom: 0 }]}>{formatLocationObject(item.location)}</Text>
                    <Animated.Text style={landingStyles.title}>{item.title}</Animated.Text>
                  </Animated.View>
                  {/********************************************************/}

                  <Animated.View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'                  
                  }}>
                    <View style={landingStyles.iconTextContainer}>
                      <SimpleLineIcons
                        name='hourglass'
                        size={12}
                        color='white'
                      />
                      <Text style={landingStyles.smallTextBottom}>
                        {formatDuration(item.duration)}
                      </Text>
                    </View>
                    <View style={landingStyles.iconTextContainer}>
                      <Ionicons
                        name='ios-chatbubbles-outline'
                        size={12}
                        color='white'
                      />
                      <Text style={landingStyles.smallTextBottom}>
                        {item.languages}
                      </Text>
                    </View>
                    <View style={landingStyles.iconTextContainer}>
                      <Stars reviews={item.reviews} />
                      <Text style={landingStyles.smallTextBottom}>
                        {formatReviewsCountText(item.reviews)}
                      </Text>
                    </View>
                  </Animated.View>
                  {/********************************************************/}
                  <Animated.View style={{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    opacity: fade
                  }}>
                  {
                    item.media.map((_, index) =>
                      <View key={index} style={this.state.currentImageIndex === index ? paginationStyle.active : paginationStyle.inactive} />)
                  }
                  </Animated.View>
                  {/********************************************************/}
                  <Animated.View style={{ flexDirection: 'row', alignContent: 'center', opacity: fade }}>
                    <MaterialCommunityIcons name="tooltip-outline-plus" size={15} color="white" style={{paddingRight:5}}></MaterialCommunityIcons>
                    <Animated.Text style={{ color: 'white', opacity: fade }}>{item.included}</Animated.Text>
                  </Animated.View>
                  <Animated.View style={{ flexDirection: 'row', alignContent: 'center', opacity: fade}}>
                    <Ionicons name="ios-person-outline" size={18} color="white" style={{paddingRight:5}}></Ionicons>
                    <Text style={{ color: 'white', lineHeight: 20 }}>{item.overview}</Text>    
                  </Animated.View>
                </View>
                {/********************************************************/}
              </View>

            </View>
          </Animated.View>

        </LinearGradient>

      </Animated.View>
    )
  }
}
