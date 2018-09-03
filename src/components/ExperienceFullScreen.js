import React from 'react'
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import landingStyles from '../styles/landingStyles'
import { Ionicons, SimpleLineIcons, Feather, MaterialIcons } from '@expo/vector-icons'
import { ifIphoneX } from 'react-native-iphone-x-helper'

let iphoneTop = {
  ...ifIphoneX(
    {
      top: 10

    },
    {
      top: 10
    }
  )
}

const { width, height } = Dimensions.get('window')

const ExperienceFullScreen = props => {
  let {item} = props
  return <View
    pointerEvents='box-none'
    style={{
      position: 'absolute',
      flex: 1,
      justifyContent: 'space-between',
      width,
      height,
      top: iphoneTop.top,
      bottom: iphoneTop.bottom

    }}>
    <View style={[landingStyles.topContainer]}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Feather
            name='arrow-left'
            size={32}
            color='white'
            style={{ marginRight: 20 }}
          />
        </TouchableOpacity>
        <Text style={[landingStyles.activityType, {fontSize: 12}]}>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ height: 1, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
          <View style={{ height: 1, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
          <View style={{ height: 1, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
          <View style={{ height: 1, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
          <View style={{ height: 1, width: 50, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
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
        <View style={{ flexDirection: 'row' }}>
          <MaterialIcons
            name='playlist-add'
            size={18}
            style={{
              paddingRight: 10,
              color: 'rgba(132, 146, 166, 1)'
            }}
          />
          <Text style={{ color: 'white' }}>Free Shots, Free Food</Text>
        </View>
        <View style={{ flexDirection: 'row', marginRight: 20 }}>
          <Ionicons
            name='ios-person-outline'
            size={18}
            style={{
              paddingRight: 10,
              color: 'rgba(132, 146, 166, 1)'
            }}
          />
          <Text style={{ color: 'white' }}>{item.description}</Text>
        </View>
      </View>
    </View>
  </View>
}

export default ExperienceFullScreen
