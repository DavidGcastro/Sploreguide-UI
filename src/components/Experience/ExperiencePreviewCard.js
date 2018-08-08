import React, { Component } from 'react'
import propTypes from 'prop-types'
import { View, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import OpenSansText from '../Text'
import { Stars } from '../Review'

export default class ExperiencePreivewCard extends Component {
  render () {
    let { height, width } = Dimensions.get('window')
    let source = 'https://images.unsplash.com/photo-1479660095429-2cf4e1360472?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=999a4a6fe048fb1d97d64ae12b2c7ec2&auto=format&fit=crop&w=1951&q=80'
    return (
      <TouchableOpacity
        style={[styles.container, {marginLeft: width * 0.05, width: width * 0.9}]}
        activeOpacity={0.9}>
        {/* Card image */}
        <Image
          style={[styles.image, {width: width * 0.9, height: height * 0.27}]}
          source={{uri: source}}
        />

        {/* Black background with opacity to make text more readable */}
        <View style={{
          position: 'absolute',
          top: 0,
          opacity: 0.2,
          borderRadius: 10,
          backgroundColor: 'black',
          width: width * 0.9,
          height: height * 0.27 }} />

        {/* Card share, favorite, and acitity type row */}
        <View style={styles.row1}>
          <View style={{flex: 1}} />
          <View style={styles.shareContainer}>
            <Ionicons name={'ios-share-outline'} size={20} color={'white'} />
          </View>
          <View style={styles.favoriteContainer}>
            <Ionicons name={'ios-heart-outline'} size={20} color={'white'} />
          </View>
          <View style={styles.activityContainer}>
            <OpenSansText fontFamily={'open-sans-semibold'} fontSize={12} color='white'>
                NIGHTLIFE
            </OpenSansText>
          </View>
          <View style={{flex: 1}} />
        </View>

        {/* Card location row */}
        <View style={styles.row2}>
          <View style={{flex: 1}} />
          <View style={styles.locationContainer}>
            <OpenSansText fontSize={14} color='white'>
              Brooklyn, NY
            </OpenSansText>
          </View>
        </View>
        {/* Card title row */}
        <View style={[styles.row3, {width: width * 0.9}]}>
          <View style={{flex: 1}} />
          <View style={styles.titleContainer}>
            <OpenSansText fontFamily={'open-sans-bold'} fontSize={18} color='white'>
              Discover the City's Party Scene
            </OpenSansText>
          </View>
        </View>

        {/* Card price, stars, and reviews row */}
        <View style={[styles.row4, {width: width * 0.9}]}>
          <View style={{flex: 0.3}} />
          <View style={styles.priceContainer}>
            <OpenSansText fontSize={11} color='white'>
                $10 / person
            </OpenSansText>
          </View>
          <View style={styles.starsContainer}>
            <Stars quantity={4} color={'white'} />
          </View>
          <View style={styles.reviewsContainer}>
            <OpenSansText fontSize={11} color='white'>
                10 reviews
            </OpenSansText>
          </View>
        </View>

        <View style={
          [styles.activityType, {
            left: -1 * width * 0.8 * 0.0375,
            backgroundColor: 'red',
            width: width * 0.8 * 0.05,
            height: height * 0.27 * 0.35}]} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 10
  },
  image: {

  },
  shareContainer: {
    flex: 1
  },
  favoriteContainer: {
    flex: 6
  },
  activityContainer: {
    borderRadius: 2,
    backgroundColor: '#e33c36', // red
    paddingHorizontal: 10,
    paddingVertical: 2
  },
  locationContainer: {
    flex: 14,
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 14
  },
  priceContainer: {
    flex: 2
  },
  starsContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  reviewsContainer: {
    flex: 1
  },
  row1: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    top: 20
  },
  row2: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 60
  },
  row3: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 35,
    height: 30
  },
  row4: {
    flexDirection: 'row',
    flex: 1,
    position: 'absolute',
    bottom: 10,
    height: 18
  },
  activityType: {
    position: 'absolute',
    bottom: 0
  }
})
