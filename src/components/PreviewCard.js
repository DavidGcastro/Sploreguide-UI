import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import previewCardStyle from '../styles/PreviewCard';
import landingStyles from '../styles/landingStyles';
import { LinearGradient } from 'expo';

const PreviewCard = props => {
  let { experience, navigateToExperience } = props;

  return (
    <ImageBackground
      style={previewCardStyle.container}
      imageStyle={{ borderRadius: 5 }}
      source={experience.media}>
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
              <TouchableOpacity style={{ paddingRight: 15 }}>
                <Ionicons
                  name={'ios-share-outline'}
                  size={25}
                  color={'white'}
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
            <Text style={[landingStyles.activityType, { fontSize: 12 }]}>
              {experience.activityType.toUpperCase()}
            </Text>
          </View>
          <View
            style={{
              borderLeftWidth: 5,
              borderLeftColor: 'rgba(227, 60, 54, 1)'
            }}>
            <View style={{ padding: 20 }}>
              <Text style={{ fontSize: 12, color: 'white' }}>
                {experience.location}
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
                  {experience.basePricePerPerson} / person
                </Text>
                <View>
                  <View
                    style={{ marginRight: 2, flexDirection: 'row', flex: 1 }}>
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star-half" size={12} color="white" />
                    <Text
                      style={{ paddingLeft: 5, color: 'white', fontSize: 12 }}>
                      {experience.reviews > 1
                        ? experience.reviews + ' Reviews'
                        : experience.reviews + ' Review'}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default PreviewCard;
