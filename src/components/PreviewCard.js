import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Price from './subheadings/Price';
import Reviews from './subheadings/Reviews';
import Tag from './Tag';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import previewCardStyle from '../styles/PreviewCard';
// Get screen dimensions
const { width, height } = Dimensions.get('window');
// How many posters we want to have in each row and column
const cols = 1,
  rows = 3.5;
export default class PreviewCard extends Component {
  // Component prop types
  static propTypes = {
    // experience object with title, genre, and poster
    experience: PropTypes.object.isRequired,
    // Called when user taps on a poster
    onOpen: PropTypes.func.isRequired
  };

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
    }
    return loc;
  }
  render() {
    const {
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
        color
      },
      onOpen
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => onOpen(experience)}>
        <View style={previewCardStyle.imageContainer}>
          {/* Tag and Icons */}
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              zIndex: 1,
              marginTop: 20
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                marginLeft: 24
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: 100
                }}>
                <Ionicons
                  name={'ios-share-outline'}
                  size={20}
                  color={'white'}
                />
                <Ionicons
                  name={'ios-heart-outline'}
                  size={20}
                  color={'white'}
                />
              </View>
            </View>

            <View
              style={{
                flex: 5.5,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginRight: 24
              }}>
              <Tag activity_type={activity_type} color={color} fontSize={10} />
            </View>
          </View>

          {/* Background Image */}
          <Image source={{ uri: poster }} style={previewCardStyle.image} />

          {/* Text */}
          <Text style={previewCardStyle.subheading} numberOfLines={1}>
            {this.parseLocation(location)}
          </Text>
          <Text style={previewCardStyle.heading} numberOfLines={1}>
            {title}
          </Text>
          <View style={previewCardStyle.detailsContainer}>
            <Price
              style={previewCardStyle.price}
              price={`$${price.single} / person `}
            />
            <Reviews style={previewCardStyle.reviews} data={reviews} />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end'
            }}>
            <View style={previewCardStyle.flag} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginBottom: 15,
    height: (height - 20 - 20) / rows - 20,
    width: (width - 20) / cols - 20
  },
  rectangle: {
    width: 5,
    height: 100,
    backgroundColor: 'red',
    zIndex: 2,
    position: 'absolute'
  }
});
