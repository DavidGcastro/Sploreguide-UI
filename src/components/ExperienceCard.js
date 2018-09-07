import React from 'react'
import landingStyles from '../styles/landingStyles'
import { Text, TouchableOpacity, ImageBackground, View } from 'react-native'
import { Ionicons, LinearGradient, SimpleLineIcons } from 'expo'

export default class ExperienceCard extends React.Component {
  render () {
    let item = this.props.item
    return (
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={0.75}>
        <View
          style={{
            flex: 1,
            shadowOffset: { width: 3, height: 1 },
            shadowColor: 'black',
            shadowOpacity: 0.8
          }}>
          <ImageBackground
            source={item.media}
            imageStyle={{ borderRadius: 10 }}
            style={{
              flex: 1
            }}>
            <LinearGradient
              colors={['transparent', 'rgba(0,0,0,1.0)']}
              start={[0.5, 0.2]}
              end={[0.5, 1.0]}
              style={{
                flex: 1,
                justifyContent: 'space-between',
                borderRadius: 10
              }}>
              <View style={landingStyles.topContainer}>
                <Text style={landingStyles.activityType}>
                  {item.activityType.toUpperCase()}
                </Text>
                <Text style={landingStyles.price}>
                  ${item.basePricePerPerson}
                </Text>
              </View>
              <View>
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
                <View style={landingStyles.bottomContainer}>
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
                </View>
              </View>
            </LinearGradient>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
}
