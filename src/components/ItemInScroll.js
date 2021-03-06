import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const { height } = Dimensions.get('window')

const calcColor = numberOfItem => {
  if (numberOfItem % 2 === 0) {
    return 'rgba(0,0,0,1.0)'
  } else {
    return '#d1d1d8'
  }
}

const getColorStyle = numberOfItem => {
  return {
    backgroundColor: calcColor(numberOfItem)
  }
}

const ItemInScroll = ({ numberOfItem }) => (
  <View style={[getColorStyle(numberOfItem), styles.container]}>
    <Text style={styles.item}>{'Item #' + numberOfItem}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    fontSize: 30
  }
})

export default ItemInScroll
