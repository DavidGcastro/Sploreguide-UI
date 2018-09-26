import React from 'react'
import { Feather } from '@expo/vector-icons'

const GoBack = props => {
  return (
    <Feather
      name='arrow-left'
      size={32}
      color={props.color || 'white'}

    />
  )
}

export default GoBack
