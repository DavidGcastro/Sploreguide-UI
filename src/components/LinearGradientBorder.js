import React from 'react'
import { LinearGradient } from 'expo'

const LinearGradientBorder = props => {
  return (
    <LinearGradient
      style={{
        borderRadius: 3,
        justifyContent: 'center'
      }}
      colors={['rgba(48, 35, 174, 1)', 'rgba(83, 160, 253, 1)']}
      start={[0, 0.5]}
      end={[0.5, 1]}>
      >
      {props.children}
    </LinearGradient>
  )
}

export default LinearGradientBorder
