import React from 'react'
import { Entypo } from '@expo/vector-icons'

const GoBack = props => {
  let color = props.color || 'white'
  return (
    <Entypo
      name='chevron-thin-left'
      size={24}
      color={color}
    />
  )
}

export default GoBack
