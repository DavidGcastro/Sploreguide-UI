import { Dimensions, ScrollView, Image, View, TouchableOpacity, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo'
// import ExperienceFullScreen from '../components/ExperienceFullScreen'
import { Ionicons, SimpleLineIcons, Feather, MaterialIcons } from '@expo/vector-icons'
import { ifIphoneX } from 'react-native-iphone-x-helper'
import landingStyles from '../styles/landingStyles'

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
export default class Experience extends React.Component {
  constructor () {
    super()
    this.image1 = React.createRef()
    this.image2 = React.createRef()
    this.image3 = React.createRef()
    this.image4 = React.createRef()
  }
  render () {
    const item = this.props.navigation.state.params.experience
    return (
      <View style={{ flex: 1 }}>
        <ScrollView
          onScroll={x => {
            let currentOffset = x.nativeEvent.contentOffset.x
            let total = width * 4
            let currentImage = currentOffset / total * 4
            //  this.refs[i].style.display = 'block';
          }}
          scrollEventThrottle={4}
          bounces={false}
          style={{ width, height }}
          horizontal pagingEnabled >
          <Image source={item.media} style={{ height, width }} />
          <Image source={item.images[0]} style={{ height, width }} />
          <Image source={item.images[1]} style={{ height, width }} />
          <Image source={item.images[2]} style={{ height, width }} />
          <Image source={item.images[3]} style={{ height, width }} />

        </ScrollView>
        <LinearGradient
          pointerEvents='box-none'
          colors={['transparent', 'rgba(0,0,0,1.0)']}
          start={[0.5, 0.2]}
          end={[0.5, 1.0]}
          style={{ height, position: 'absolute' }}
        >
          <View
            pointerEvents='box-none'
            style={{
              position: 'relative',
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
                <Text style={[landingStyles.activityType, { fontSize: 11, paddingHorizontal: 4 }]}>
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
              top: 0,
              marginBottom: 50
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
                  <Text style={[landingStyles.title, { fontSize: 25 }]}>{item.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <View ref={this.image1} style={{ height: 1.5, width: 55, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                  <View ref={this.image2} style={{ height: 1.5, width: 55, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                  <View ref={this.image2} style={{ height: 1.5, width: 55, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                  <View ref={this.image3} style={{ height: 1.5, width: 55, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
                  <View ref={this.image4} style={{ height: 1.5, width: 55, backgroundColor: 'rgba(255, 255, 255, .5)' }} />
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
        </LinearGradient>
        <View style={{ height: 50, backgroundColor: 'red' }} />
      </View>

    )
  }
}
