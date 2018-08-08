import React, { Component } from 'react';
import MainSearch from '../components/MainSearch';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground
} from 'react-native';
import { LinearGradient } from 'expo';
import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import landingStyles from '../styles/landingStyles';
import landingData from '../landingData';
let { width } = Dimensions.get('window');
let images = [
  require('../assets/img/amsterdam.jpg'),
  require('../assets/img/nature.jpg'),
  require('../assets/img/nightlife.jpg')
];

export default class Landing extends Component {
  constructor() {
    super();
    this.state = {};
  }

  _renderItem({ item, index }) {
    return (
      <View
        style={{
          flex: 1,
          shadowOffset: { width: 3, height: 1 },
          shadowColor: 'black',
          shadowOpacity: 0.8
        }}>
        <ImageBackground
          source={images[index]}
          imageStyle={{ borderRadius: 10 }}
          style={{
            flex: 1
          }}>
          <LinearGradient
            colors={['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.4)']}
            start={[0, 0]}
            end={[0, 0]}
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
                  <Feather
                    name="upload"
                    size={25}
                    color="white"
                    style={{ paddingRight: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="md-heart-outline" size={25} color="white" />
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
                    <SimpleLineIcons name="hourglass" size={12} color="white" />
                    <Text style={landingStyles.smallTextBottom}>
                      {Math.round((item.duration / 60) % 60)}:00
                    </Text>
                  </View>
                  <View style={landingStyles.iconTextContainer}>
                    <Ionicons
                      name="ios-chatbubbles-outline"
                      size={12}
                      color="white"
                    />
                    <Text style={landingStyles.smallTextBottom}>
                      {item.languages}
                    </Text>
                  </View>
                  <View style={landingStyles.iconTextContainer}>
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star" size={12} color="white" />
                    <Ionicons name="ios-star-half" size={12} color="white" />
                    <Text style={landingStyles.smallTextBottom}>
                      {item.reviews} Review(s)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
  render() {
    return (
      <View style={landingStyles.parent}>
        <View onTouchEnd={() => this.props.navigation.navigate('Search')}>
          <MainSearch />
        </View>
        <View style={landingStyles.wrapper}>
          <Text style={landingStyles.TopText}>Top Trending</Text>
          <TouchableOpacity
            style={landingStyles.viewAll}
            onPress={() => this.props.navigation.navigate('Preview')}>
            <Text style={landingStyles.viewAllText}>View All</Text>
            <Ionicons
              name="md-arrow-forward"
              size={30}
              color="rgba(48, 55, 64, 1)"
            />
          </TouchableOpacity>
        </View>

        <Carousel
          data={landingData}
          renderItem={this._renderItem}
          sliderWidth={width}
          itemWidth={width - 50}
        />
      </View>
    );
  }
}
