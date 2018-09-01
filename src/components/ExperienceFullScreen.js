import React from 'react'
import { Dimensions, View, Text, TouchableOpacity } from 'react-native'
import landingStyles from '../styles/landingStyles'
import { Ionicons, SimpleLineIcons, Feather } from '@expo/vector-icons'

const { width, height } = Dimensions.get('window')

const ExperienceFullScreen = props => {
  let {item} = props
  return <View style={{
    position: 'absolute',
    flex: 1,
    justifyContent: 'space-between',
    width,
    height
  }}>
    <View style={[landingStyles.topContainer]}>
      <Feather
        name='arrow-left'
        size={32}
        color='white'
      />
      <Text style={landingStyles.activityType}>
        {item.activityType.toUpperCase()}
      </Text>
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
        <View
          style={{
            borderBottomColor: 'rgba(255, 255, 255, .3)',
            borderBottomWidth: 1
          }}>
          <Text style={landingStyles.location}>{item.location}</Text>
          <Text style={landingStyles.title}>{item.title}</Text>
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
}

export default ExperienceFullScreen
