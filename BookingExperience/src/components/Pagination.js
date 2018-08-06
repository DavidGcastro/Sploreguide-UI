/*
* @Author: Abhi
* @Date:   2018-07-14 15:14:45
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-15 14:17:51
*/

/*
* @Author: Abhi
* @Date:   2018-07-13 20:25:32
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-14 14:55:30
*/

import React, { Component } from 'react';
import {
  Animated,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
  Text
} from 'react-native';

import PropTypes from 'prop-types';

import Tag from './Tag';
import NavBackButton from './NavBackButton';
import Price from './Price';
import Reviews from './subheadings/Reviews';
import Duration from './subheadings/Duration';
import Language from './subheadings/Language';

import { isIphoneX } from 'react-native-iphone-x-helper';
import { Ionicons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
// design tip - should cap images to 10
const BAR_SPACE = 10;
const THRESHOLD = 5;

export default class Pagination extends Component {
  static propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    animationRange: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired,
    onBackPress: PropTypes.func.isRequired
  };

  static defaultProps = {
    max: height / 4,
    min: height / 8
  };

  animateHeader = {
    transform: [
      {
        translateY: this.props.animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this.props.min - this.props.max]
        })
      }
    ]
  };

  animateTopBar = {
    transform: [
      {
        translateY: this.props.animationRange.interpolate({
          inputRange: [0, 1],
          outputRange: [0, this.props.max - this.props.min]
        })
      }
    ]
  };

  animVal = new Animated.Value(0);

  getPaginationElements(experience) {
    const {
      title,
      genre,
      poster,
      price,
      location,
      duration,
      language,
      activity_type,
      reviews,
      included,
      overview,
      images
    } = experience;
    const numItems = images.length;
    const FIXED_BAR_WIDTH =
      width -
      9 * BAR_SPACE -
      (numItems > THRESHOLD ? (numItems - THRESHOLD) * BAR_SPACE : 0);
    const itemWidth = FIXED_BAR_WIDTH / numItems;

    let imageArray = [];
    let barArray = [];

    images.forEach((image, i) => {
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{ uri: image }}
          style={{ width: width }}
        />
      );
      imageArray.push(thisImage);

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [width * (i - 1), width * (i + 1)],
        outputRange: [-itemWidth, itemWidth],
        extrapolate: 'clamp'
      });

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE
            }
          ]}>
          <Animated.View
            style={[
              styles.bar,
              {
                width: itemWidth,
                transform: [{ translateX: scrollBarVal }]
              }
            ]}
          />
        </View>
      );
      barArray.push(thisBar);
    });
    return { imageArray, barArray };
  }

  titleCase(str) {
    var str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  parseLocation(location) {
    var loc = this.titleCase(location.city);
    if (location.borough != '') {
      loc = `${this.titleCase(location.borough)}, ${loc}`;
    } else {
      loc = `${loc}, ${this.titleCase(location.country)}`;
    }
    return loc;
  }

  render() {
    const {
      min,
      max,
      onOpen,
      experience,
      experience: {
        title,
        genre,
        poster,
        price,
        location,
        duration,
        language,
        activity_type,
        color,
        reviews,
        included,
        overview,
        images
      }
    } = this.props;
    const { imageArray, barArray } = this.getPaginationElements(experience);
    return (
      <Animated.View
        style={[
          styles.headerBackground,
          this.animateHeader,
          { height: max - 150 }
        ]}>
        ;
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={10}
            pagingEnabled
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { x: this.animVal } } }
            ])}>
            {imageArray}
          </ScrollView>

          {/* Column flex doesnt work when the view is 'absolutely' positioned idk y so used height percentages instead*/}
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              zIndex: 2,
              position: 'absolute'
            }}>
            {/* Top Bar */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'transparent',
                width: width,
                marginTop: isIphoneX() ? 55 : 30
              }}>
              {' '}
              {/* marginTop should be 55 for iPhone X */}
              <Animated.View
                style={[
                  { justifyContent: 'flex-end', marginLeft: 24 },
                  this.animateTopBar
                ]}>
                <NavBackButton title="" onPress={this.props.onBackPress} />
              </Animated.View>
              <Animated.View
                style={[
                  { justifyContent: 'flex-end', marginLeft: 24 },
                  this.animateTopBar
                ]}>
                <Tag
                  activity_type={activity_type}
                  color={color}
                  fontSize={12}
                />
              </Animated.View>
              <View
                style={{ flex: 6, alignItems: 'flex-end', marginRight: 24 }}>
                <Price price={price.single} />
              </View>
            </View>

            {/* Share and Heart */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                width: width,
                height: height / 2.0675
              }}>
              {' '}
              {/*have to figure out the correct height/2.0675*/}
              <View style={{ marginRight: 22 }}>
                <Ionicons
                  name={'ios-share-outline'}
                  size={26}
                  color={'white'}
                />
              </View>
              <View style={{ marginRight: 28 }}>
                <Ionicons
                  name={'ios-heart-outline'}
                  size={26}
                  color={'white'}
                />
              </View>
            </View>

            {/* Subtitle */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                width: width
              }}>
              <View style={{ marginLeft: 22, marginTop: 20 }}>
                <Text
                  style={{
                    fontFamily: 'SF-UI-Text-Regular',
                    fontSize: 18,
                    color: 'white'
                  }}>
                  {this.parseLocation(location)}
                </Text>
              </View>
            </View>

            {/* Title */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
                width: width
              }}>
              <View style={{ marginLeft: 22, marginTop: 10 }}>
                <Text
                  style={{
                    fontFamily: 'SF-UI-Text-Semibold',
                    fontSize: 26,
                    lineHeight: 26,
                    color: 'white'
                  }}>
                  {title}
                </Text>
              </View>
            </View>

            {/* Main Details */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                width: width
              }}>
              <View
                style={{
                  flex: 2,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'flex-end'
                }}>
                <View style={{ marginLeft: 22 }}>
                  <Duration
                    style={{
                      fontFamily: 'SF-UI-Text-Regular',
                      fontSize: 12,
                      color: 'rgba(255, 255, 255, 0.5)',
                      paddingTop: 10
                    }}
                    duration={duration}
                  />
                </View>
                <View style={{ marginLeft: 22 }}>
                  <Language
                    style={{
                      fontFamily: 'SF-UI-Text-Regular',
                      fontSize: 12,
                      color: 'rgba(255, 255, 255, 0.5)',
                      paddingTop: 10
                    }}
                    language={language}
                  />
                </View>
              </View>
              <View style={{ marginRight: 22, flex: 1 }}>
                <Reviews
                  style={{
                    fontFamily: 'SF-UI-Text-Regular',
                    fontSize: 12,
                    color: 'rgba(255, 255, 255, 0.5)',
                    paddingTop: 10
                  }}
                  data={reviews}
                />
              </View>
            </View>

            {/* Pagination Indicator */}
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                top: 18
              }}>
              {barArray}
            </View>

            <View
              style={{ flex: 0.75, backgroundColor: 'green', width: width }}
            />
          </View>
        </View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  headerBackground: {
    position: 'absolute',
    flex: 0,
    width: '100%',
    backgroundColor: 'white',
    zIndex: 2
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  barContainer: {
    position: 'absolute',
    zIndex: 3,
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  track: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    overflow: 'hidden',
    height: 1
  },
  bar: {
    backgroundColor: 'rgba(255, 255, 255, 1.0)',
    height: 1,
    position: 'absolute',
    left: 0,
    top: 0
  }
});

/*


	        				        <View style={styles.barContainer}>
		          {barArray}
		        </View>
*/
