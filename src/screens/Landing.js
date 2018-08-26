import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  ScrollView
} from 'react-native';
import { LinearGradient } from 'expo';
import { ifIphoneX } from 'react-native-iphone-x-helper';
import { Ionicons, Feather, SimpleLineIcons } from '@expo/vector-icons';
import landingStyles from '../styles/landingStyles';
import landingData from '../landingData';
import { dir } from 'async';
let { width, height } = Dimensions.get('window');
let images = [
  require('../assets/img/amsterdam.jpg'),
  require('../assets/img/nature.jpg'),
  require('../assets/img/nightlife.jpg')
];

let categories = [
  'Top Trending',
  'Highest Rated',
  'Best Value',
  'Weekend Picks',
  'Nature'
];
let offset = 0;
const styles = {
  container: {
    backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'rgba(132, 146, 166, .2)',
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 5,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 0.5,
    width: width - 40
  },
  searchImage: {
    width: 20,
    height: 30,
    tintColor: '#9b9b9b'
  }
};
let cardHeight = {
  ...ifIphoneX(
    {
      height: height - 290,
      scrollViewInterval: height - 270
    },
    {
      height: height - 230,
      scrollViewInterval: height - 210
    }
  )
};
export default class Landing extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      liked: false,
      category: '',
      fromTop: 0
    };
    this._renderItem = this._renderItem.bind(this);
    this.onSwipeUp = this.onSwipeUp.bind(this);
  }

  componentDidMount() {
    this.onSwipeUp(0);
  }
  onSwipeUp(top, direction) {
    console.log(direction);
    let index =
      direction === 'down'
        ? Math.floor(top / cardHeight.scrollViewInterval)
        : Math.ceil(top / cardHeight.scrollViewInterval);

    return this.setState({
      category: categories[index]
    });
  }

  _renderItem({ item, index }) {
    let reviews =
      item.reviews > 1 ? item.reviews + ' Reviews' : item.reviews + ' Review';

    let heartStyle = { backgroundColor: 'pink', width: 20, height: 20 };

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
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ liked: !this.state.liked });
                  }}>
                  <Ionicons
                    name="md-heart-outline"
                    size={25}
                    color="white"
                    style={this.state.liked ? heartStyle : {}}
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
                    <SimpleLineIcons name="hourglass" size={12} color="white" />
                    <Text style={landingStyles.smallTextBottom}>
                      {Math.round((item.duration / 60) % 60)}
                      :00
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
                    <Text style={landingStyles.smallTextBottom}>{reviews}</Text>
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
    let search = this.props.navigation.state.params
      ? this.props.navigation.state.params.search
      : this.state.search;

    return (
      <View style={landingStyles.parent}>
        <View>
          <View style={styles.container}>
            <Image
              style={styles.searchImage}
              resizeMode="contain"
              source={require('../assets/img/Search.png')}
            />
            <TextInput
              onChangeText={search => this.setState({ search })}
              autoFocus={false}
              onFocus={() => {
                this.props.navigation.navigate('Search', {
                  search: this.state.search
                });
              }}
              style={{
                fontSize: 20,
                fontWeight: '500',
                paddingLeft: 10,
                flex: 1
              }}
              value={search}
              placeholder="Search by City or Activity"
            />
          </View>
          />
        </View>
        <View style={landingStyles.wrapper}>
          <Text style={landingStyles.TopText}>{this.state.category}</Text>
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
        <ScrollView
          decelerationRate={0}
          alwaysBounceVertical={false}
          bounces={false}
          snapToInterval={cardHeight.scrollViewInterval}
          onScroll={x => {
            let currentOffset = x.nativeEvent.contentOffset.y;
            let direction = currentOffset >= offset ? 'up' : 'down';
            offset = currentOffset;

            this.onSwipeUp(currentOffset, direction);
          }}
          scrollEventThrottle={1}>
          <View
            style={{ flex: 1, height: cardHeight.height, marginBottom: 20 }}>
            <Carousel
              data={landingData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 50}
            />
          </View>
          <View
            style={{ flex: 1, height: cardHeight.height, marginBottom: 20 }}>
            <Carousel
              data={landingData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 50}
            />
          </View>
          <View
            style={{ flex: 1, height: cardHeight.height, marginBottom: 20 }}>
            <Carousel
              data={landingData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 50}
            />
          </View>
          <View
            style={{ flex: 1, height: cardHeight.height, marginBottom: 20 }}>
            <Carousel
              data={landingData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 50}
            />
          </View>
          <View
            style={{ flex: 1, height: cardHeight.height, marginBottom: 20 }}>
            <Carousel
              data={landingData}
              renderItem={this._renderItem}
              sliderWidth={width}
              itemWidth={width - 50}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
