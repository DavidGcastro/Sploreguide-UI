import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import previewCardStyle from '../styles/PreviewCard';
import landingStyles from '../styles/landingStyles';
import { LinearGradient } from 'expo';

const PreviewCard = props => {
  let { experience } = props;
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <ImageBackground
        style={previewCardStyle.container}
        imageStyle={{ borderRadius: 5 }}
        source={experience.media}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.4)']}
          start={[0, 0]}
          end={[0, 0]}
          style={{ flex: 1, borderRadius: 5 }}>
          <View style={{ flex: 1, padding: 20 }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start'
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
              <Text style={landingStyles.activityType}>
                {experience.activityType.toUpperCase()}
              </Text>
            </View>
            <View>
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
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default PreviewCard;

// onPress={() => onOpen(experience)}>
