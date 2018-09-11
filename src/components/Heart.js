import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const Heart = ({ isFavorite }) => {
  if (isFavorite) {
    return <Ionicons
      name={'ios-heart'}
      size={25}
      color={'red'}/>
    }

  return <Ionicons
    name={'ios-heart-outline'}
    size={25}
    color={'white'}/>

}

export default Heart