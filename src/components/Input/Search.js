import React, { Component } from 'react'
import propTypes from 'prop-types'
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import OpenSansText from '../Text'

export default class Search extends Component {
  render () {
    let { height, width } = Dimensions.get('window')
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={[styles.container, {marginLeft: width * 0.05, width: width * 0.9}]}>
        <View style={styles.arrowBack}>
          <Ionicons color={'gray'} name={'ios-arrow-back'} size={25} />
        </View>
        <View style={styles.searchText}>
          <OpenSansText
            fontSize={18}
            color={'gray'}>
            Bronx, NY
          </OpenSansText>
        </View>
        <TouchableOpacity activeOpacity={0.9} style={styles.filterContainer}>
          <FontAwesome color={'gray'} name={'sliders'} size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  arrowBack: {
    flex: 1,
    marginTop: 1
  },
  searchText: {
    flex: 15
  },
  filterContainer: {
    flex: 1
  }
})
