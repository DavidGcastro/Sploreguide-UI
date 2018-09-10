import React from 'react'
import { Dimensions, View, Text, TouchableOpacity, ScrollView, Image, PanResponder, Animated, StyleSheet } from 'react-native'
import landingStyles from '../styles/landingStyles'
import { LinearGradient } from 'expo'
import { Ionicons, SimpleLineIcons, Feather } from '@expo/vector-icons'
import Stars from '../components/Stars'
import { formatReviewsCountText } from '../helpers/strings'
const { width, height } = Dimensions.get('window')
export default class ExperienceFullScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      currentImageIndex: 0
    }
  }
  render () {
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
        if (gestureState.dy < -40) {
          Animated.parallel([
            Animated.timing(totalHeight, {
              toValue: height / 3 + 10,
              duration: 200
            }),
            Animated.timing(paddingBelow, {
              toValue: 35,
              duration: 200
            }),
            Animated.timing(fade, {
              toValue: 0,
              duration: 200
            })
          ]).start()
        }
        if (gestureState.dy > 40) {
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
    let { item, nav } = this.props
    let paginationStyle = StyleSheet.create({
      active: {
        height: 0.5, width: 55, backgroundColor: 'white'
      },
      inactive: {
        height: 0.5, width: 55, backgroundColor: 'grey'

      }
    })
    return (
      <Animated.View style={{ height: totalHeight }}>
        <ScrollView
          {..._panResponder.panHandlers}
          onScroll={x => {
            let currentOffset = x.nativeEvent.contentOffset.x
            let total = width * 4
            let currentImage = Math.ceil(currentOffset / total * 4)
            this.setState({currentImageIndex: currentImage})
          }}
          scrollEventThrottle={4}
          bounces={false}
          style={{ width, height }}
          horizontal pagingEnabled >
          <Image ref={this.foo} source={item.media} style={{ height: '100%', width }} />
          <Image source={item.images[0]} style={{ height: '100%', width }} />
          <Image source={item.images[1]} style={{ height: '100%', width }} />
          <Image source={item.images[2]} style={{ height: '100%', width }} />
          <Image source={item.images[3]} style={{ height: '100%', width }} />
        </ScrollView>
        <LinearGradient
          pointerEvents='box-none'
          colors={['transparent', 'rgba(0,0,0,1.0)']}
          start={[0.5, 0.2]}
          end={[0.5, 1.0]}
          style={{ height: '100%', width, position: 'absolute' }}
        >
          {/* PARENT */}
          <View
            pointerEvents='box-none'
            style={{ flex: 1 }}>
            <View
              pointerEvents='box-none' style={[landingStyles.topContainer, { flex: 1, alignItems: 'flex-start' }]}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity onPress={() => nav()}>
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
                  height: '100%', paddingHorizontal: 20
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
                  <TouchableOpacity>
                    <Ionicons
                      name={'ios-heart-outline'}
                      size={25}
                      color={'white'}
                    />
                  </TouchableOpacity>
                </View>
                {/********************************************************/}
                <View pointerEvents='none' style={{ justifyContent: 'space-evenly', flex: 1 }}>
                  <Animated.View pointerEvents='none'>
                    <Text style={[landingStyles.location, { paddingBottom: 0 }]}>{item.location}</Text>
                    <Animated.Text style={[landingStyles.title, { paddingBottom: paddingBelow }]}>{item.title}</Animated.Text>
                  </Animated.View>
                  {/********************************************************/}

                  <View style={{
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
                        {Math.round((item.duration / 60) % 60)}
                        :00
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
                  </View>
                  {/********************************************************/}
                  <Animated.View style={{
                    justifyContent: 'space-evenly',
                    flexDirection: 'row',
                    opacity: fade
                  }}>
                    <View style={this.state.currentImageIndex === 0 ? paginationStyle.active : paginationStyle.inactive} />
                    <View style={this.state.currentImageIndex === 1 ? paginationStyle.active : paginationStyle.inactive} />
                    <View style={this.state.currentImageIndex === 2 ? paginationStyle.active : paginationStyle.inactive} />
                    <View style={this.state.currentImageIndex === 3 ? paginationStyle.active : paginationStyle.inactive} />
                    <View style={this.state.currentImageIndex === 4 ? paginationStyle.active : paginationStyle.inactive} />
                  </Animated.View>
                  {/********************************************************/}
                  <Animated.Text style={{ color: 'white', opacity: fade }}>Free Shots, and Entry Included.</Animated.Text>
                  <Animated.Text style={{ color: 'white', opacity: fade, lineHeight: 20 }}>{item.description}</Animated.Text>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </Animated.View>
    )
  }
}
