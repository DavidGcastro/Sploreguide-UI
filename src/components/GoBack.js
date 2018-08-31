import React from 'react'
import { Feather } from '@expo/vector-icons'

const GoBack = props => {
  return (
    <Feather
      name='arrow-left'
      size={32}
      color='white'
      style={{ marginTop: 25, marginBottom: 10, marginLeft: 20 }}
    />
  )
}

export default GoBack
