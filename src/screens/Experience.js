import { Dimensions, ScrollView, Image, View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo'
import experiences from '../experiences'
import landingStyles from '../styles/landingStyles'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import { Ionicons, SimpleLineIcons, Feather } from '@expo/vector-icons'
const { width, height } = Dimensions.get('window')
let item = experiences[0]

let iphoneTop = {
  ...ifIphoneX(
    {
      top: 20
    },
    {
      top: 10
    }
  )
}
export default class Experience extends React.Component {
  render () {
    return (
      <View>
        <ScrollView
          bounces={false}
          style={{ width, height }}
          horizontal pagingEnabled >
          <LinearGradient
            colors={['white', 'rgba(0,0,0,1.0)']}
            start={[0.5, 0.2]}
            end={[0.5, 1.0]}
            style={{
              width, height
            }}
          >
            <Image source={item.images[0]} style={{ height, width }} />
          </LinearGradient>
          <LinearGradient
            colors={['white', 'rgba(0,0,0,1.0)']}
            start={[0.5, 0.2]}
            end={[0.5, 1.0]}
            style={{
              width, height

            }}>
            <Image source={item.images[1]} style={{ height, width }} />
          </LinearGradient>
          <LinearGradient
            colors={['white', 'rgba(0,0,0,1.0)']}
            start={[0.5, 0.2]}
            end={[0.5, 1.0]}
            style={{
              width, height

            }}
          >
            <Image source={item.images[2]} style={{ height, width }} />
          </LinearGradient>
        </ScrollView>
        <View
          pointerEvents='none'
          style={{
            position: 'absolute',
            flex: 1,
            justifyContent: 'space-between',
            width,
            height,
            top: iphoneTop.top

          }}>
          <View style={[landingStyles.topContainer]}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Feather
                  name='arrow-left'
                  size={32}
                  color='white'
                  style={{marginRight: 20}}
                />
              </TouchableOpacity>
              <Text style={landingStyles.activityType}>
                {item.activityType.toUpperCase()}
              </Text>
            </View>
            <Text style={landingStyles.price}>
              ${item.basePricePerPerson}
            </Text>
          </View>
          {/* --------------------- */}
          <View style={{
            left: 0,
            right: 0,
            top: 0
          }}>
            <View style={landingStyles.bottomContainerIcons}>
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
            <View style={[landingStyles.bottomContainer, { justifyContent: 'space-evenly', height: height / 2 - 50 }]}>
              <View>
                <Text style={landingStyles.location}>{item.location}</Text>
                <Text style={landingStyles.title}>{item.title}</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{ height: 2, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                <View style={{ height: 2, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                <View style={{ height: 2, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                <View style={{ height: 2, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                <View style={{ height: 2, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
              </View>

              <View style={landingStyles.lastContainer}>

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
                  <Ionicons name='ios-star' size={12} color='white' />
                  <Ionicons name='ios-star' size={12} color='white' />
                  <Ionicons name='ios-star' size={12} color='white' />
                  <Ionicons name='ios-star' size={12} color='white' />
                  <Ionicons name='ios-star-half' size={12} color='white' />
                  <Text style={landingStyles.smallTextBottom}>
                    {item.reviews}
                  </Text>
                </View>
              </View>
              <Text style={{ color: 'white' }}>Free Shots, Free Food</Text>
              <Text style={{ color: 'white' }}>{item.description}</Text>
            </View>
          </View>
        </View>
      </View>

    )
  }
}
