import React from 'react'
import propTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Stars (props) {
  let { size, color, quantity, total } = props

  if (quantity < 0) {
    quantity = total
  }

  let filled = []
  for (let i = 0; i <= quantity - 1; i++) {
    filled.push(i)
  }

  let empty = []
  if (total - quantity !== 0) {
    for (let j = 0; j <= total - quantity - 1; j++) {
      empty.push(j)
    }
  }

  return (
    <View style={styles.container}>
      {
        filled.map((item) =>
          <Ionicons
            key={item}
            name={'ios-star'}
            size={size}
            color={color} />
        )
      }
      {
        empty.map((item) =>
          <Ionicons
            key={item}
            name={'ios-star-outline'}
            size={size}
            color={color} />
        )
      }
    </View>
  )
}

Stars.propTypes = {
  size: propTypes.number,
  color: propTypes.string,
  quantity: propTypes.number.isRequired,
  total: propTypes.number
}

Stars.defaultProps = {
  size: 11,
  color: 'red',
  total: 5
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})
