/*
* @Author: Abhi
* @Date:   2018-07-13 20:25:32
* @Last Modified by:   Abhi
* @Last Modified time: 2018-07-14 16:07:17
*/

import React, { Component } from 'react';
import { 
	Animated, 
	View, 
	StyleSheet, 
	Image, 
	Dimensions, 
	ScrollView 
} from 'react-native';

import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const deviceWidth = Dimensions.get('window').width
const FIXED_BAR_WIDTH = 280
const BAR_SPACE = 10

const images = [
  'https://s-media-cache-ak0.pinimg.com/originals/ee/51/39/ee5139157407967591081ee04723259a.png',
  'https://s-media-cache-ak0.pinimg.com/originals/40/4f/83/404f83e93175630e77bc29b3fe727cbe.jpg',
  'https://s-media-cache-ak0.pinimg.com/originals/8d/1a/da/8d1adab145a2d606c85e339873b9bb0e.jpg',
]

export default class PaginationList extends Component {

	static propTypes = {
		max				: 	PropTypes.number,
		min				:	PropTypes.number,
		animationRange	:	PropTypes.object,
		// experience		:	PropTypes.object.isRequired
	};

	static defaultProps = {
	    max				:	height/4,
	    min				:	height/8,
  };


	// animateHeader =	{	transform: [
	// 	            {
	// 	                translateY: this.props.animationRange.interpolate({
	// 	                    inputRange: [0, 1],
	// 	                    outputRange: [0, this.props.min-this.props.max],
	// 	                })
	// 	            }
	//         	]
	//         };
   

  numItems = images.length
  itemWidth = (FIXED_BAR_WIDTH / this.numItems) - ((this.numItems - 1) * BAR_SPACE)
  animVal = new Animated.Value(0)

  render() {
  	const { min, max } = this.props;

    let imageArray = []
    let barArray = []
    images.forEach((image, i) => {
      console.log(image, i)
      const thisImage = (
        <Image
          key={`image${i}`}
          source={{uri: image}}
          style={{ width: deviceWidth }}
        />
      )
      imageArray.push(thisImage)

      const scrollBarVal = this.animVal.interpolate({
        inputRange: [deviceWidth * (i - 1), deviceWidth * (i + 1)],
        outputRange: [-this.itemWidth, this.itemWidth],
        extrapolate: 'clamp',
      })

      const thisBar = (
        <View
          key={`bar${i}`}
          style={[
            styles.track,
            {
              width: this.itemWidth,
              marginLeft: i === 0 ? 0 : BAR_SPACE,
            },
          ]}
        >
          <Animated.View

            style={[
              styles.bar,
              {
                width: this.itemWidth,
                transform: [
                  { translateX: scrollBarVal },
                ],
              },
            ]}
          />
        </View>
      )
      barArray.push(thisBar)
    })

    return (
    	// <Animated.View style={[styles.container, this.animateHeader, { height: max }]}>;

    		<View style={styles.container}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={10}
          pagingEnabled
          onScroll={
            Animated.event(
              [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
            )
          }
        >

          {imageArray}

        </ScrollView>
        <View
          style={styles.barContainer}
        >
          {barArray}
        </View>


      </View>

    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barContainer: {
    position: 'absolute',
    zIndex: 2,
    top: 40,
    flexDirection: 'row',
  },
  track: {
    backgroundColor: '#ccc',
    overflow: 'hidden',
    height: 2,
  },
  bar: {
    backgroundColor: '#5294d6',
    height: 2,
    position: 'absolute',
    left: 0,
    top: 0,
  },
})