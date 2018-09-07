import React, { Component } from 'react'
import { Text, TouchableOpacity, View, ImageBackground, Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import previewCardStyle from '../styles/PreviewCard'
import landingStyles from '../styles/landingStyles'
import { LinearGradient } from 'expo'
import { formatLocationObject } from '../helpers/strings'
import { Mutation } from 'react-apollo'
import { UPDATE_FAVORITES } from '../mutations'

import Stars from '../components/Stars'

class PreviewCard extends Component {
  render () {
    let { experience, isFavorite, confirm } = this.props
    return (
      <ImageBackground
        style={previewCardStyle.container}
        imageStyle={{ borderRadius: 5 }}
        source={{uri: experience.media[0]}}>
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,1.0)']}
          start={[0.5, 0.2]}
          end={[0.5, 1.0]}
          style={{ flex: 1, borderRadius: 5 }}>
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: 20
              }}>
              <View style={{ flexDirection: 'row', flex: 1 }}>
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
                        confirm
                          ? Alert.alert(
                            'Remove Experience',
                            `Are you sure you want to remove "${experience.title}"?`,
                            [
                              {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                              {text: 'OK', onPress: () => updateUserFavorites({ variables: { experienceId: experience._id } })}
                            ],
                            { cancelable: false }
                          )
                          : updateUserFavorites({ variables: { experienceId: experience._id } })
                      }
                      }
                    >
                      {
                        isFavorite
                          ? <Ionicons
                            name={'ios-heart'}
                            size={25}
                            color={'red'}
                          />
                          : <Ionicons
                            name={'ios-heart-outline'}
                            size={25}
                            color={'white'}
                          />
                      }
                    </TouchableOpacity>
                  )
                  }
                </Mutation>
              </View>
              <Text style={[landingStyles.activityType, { fontSize: 10, paddingHorizontal: 5 }]}>
                {experience.activityType.toUpperCase()}
              </Text>
            </View>
            <View
              style={{
                borderLeftWidth: 5,
                borderLeftColor: 'rgba(227, 60, 54, 1)',
                borderBottomLeftRadius: 5
              }}>
              <View style={{ padding: 20 }}>
                <Text style={{ fontSize: 12, color: 'white' }}>
                  {formatLocationObject(experience.location)}
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'white',
                    fontFamily: 'SF-UI-Text-Bold',
                    paddingBottom: 10
                  }}>
                  {experience.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                  }}>
                  <Text style={{ color: 'white', fontSize: 12 }}>
                  ${experience.basePricePerPerson} / person
                  </Text>
                  <View>
                    <Stars reviews={experience.reviews} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    )
  }
}

export default PreviewCard
