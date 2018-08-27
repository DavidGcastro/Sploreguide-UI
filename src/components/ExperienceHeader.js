import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Image
} from 'react-native';

import PropTypes from 'prop-types';
import Pagination, { Icon, Dot } from 'react-native-pagination';
import PaginationExample from './PaginationExample';

const { width, height } = Dimensions.get('window');

export default class ExperienceHeader extends Component {
  // Component prop types
  static propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    animationRange: PropTypes.object.isRequired,
    experience: PropTypes.object.isRequired
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

  render() {
    const {
      min,
      max,
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
        reviews,
        included,
        overview
      },
      onOpen
    } = this.props;

    return (
      <View style={[styles.container, { height: max }]} pointerEvents="none">
        <Animated.View
          style={[
            styles.headerBackground,
            this.animateHeader,
            { height: max }
          ]}>
          ;
          <View style={headerStyles.container}>
            <View style={headerStyles.imageContainer}>
              <Image source={{ uri: poster }} style={headerStyles.image} />
            </View>
          </View>
        </Animated.View>
        <Animated.View
          style={[styles.container, , { height: max }]}
          pointerEvents="none"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 0,
    zIndex: 2,
    width: '100%',
    backgroundColor: 'transparent',

    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBackground: {
    position: 'absolute',
    flex: 0,
    width: '100%',
    backgroundColor: 'transparent',
    zIndex: 2
  }
});

const headerStyles = {
  container: {
    marginLeft: 0,
    marginBottom: 0,
    height: height,
    width: width
  },
  imageContainer: {
    flex: 1
  },
  image: {
    ...StyleSheet.absoluteFillObject // fill up all space in a container
  }
};

/*
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
  	const itemWidth = (FIXED_BAR_WIDTH / this.numItems);
		const FIXED_BAR_WIDTH = deviceWidth-8*BAR_SPACE-(numItems > THRESHOLD ? (numItems-THRESHOLD)*BAR_SPACE : 0);

    let imageArray = []
    let barArray = []

		images.forEach((image, i) => {
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
    return { imageArray, barArray }
  }


*/
