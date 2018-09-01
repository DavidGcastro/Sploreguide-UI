import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'

const Stars = ({reviews}) => {
  if (reviews.length === 0) return ''

  let avg = Math.ceil(Array.from(reviews).reduce((prev, nextReview) => (prev + nextReview.rating), 0) / reviews.length)

  return (
    <View style={{flexDirection: 'row'}}>
      {
        [1, 2, 3, 4, 5].map((val) => {
          if (val <= avg) return <Ionicons key={val} name='ios-star' size={12} color='white' />
          return <Ionicons key={val} name='ios-star-outline' size={12} color='white' />
        })
      }
    </View>
  )
}

export default Stars
