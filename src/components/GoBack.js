import React from 'react'
import { Feather } from '@expo/vector-icons'

const GoBack = props => {
  let color = props.color || 'white'
  return (
    <Feather
      name='arrow-left'
      size={32}
      color={color}

    />
  )
}

export default GoBack
