import React from 'react'
import SvgAnimatedLinearGradient from 'react-native-svg-animated-linear-gradient'
import { View, Dimensions } from 'react-native'
import { Svg } from 'expo'

let { width, height } = Dimensions.get('window')

const CustomLoading = props => {
  return (
    <View style={{
      display: 'flex',
      height: height,
      width: width,
      zIndex: 10000}}>
      <SvgAnimatedLinearGradient
        height={height}
        width={width * 0.93}
        speed={2}
        primaryColor='#717987'
        secondaryColor='#fff'
        {...props}
      >
        <Svg.Rect x='18' y='32' rx='4' ry='4' width='373' height='48.49' />
        <Svg.Rect x='18.5' y='100.75' rx='0' ry='0' width='367.2' height='187' />
        <Svg.Rect x='92.5' y='142.75' rx='0' ry='0' width='0' height='0' />
        <Svg.Rect x='21.5' y='314.75' rx='0' ry='0' width='367' height='10' />
        <Svg.Rect x='29.5' y='339.75' rx='0' ry='0' width='184' height='0' />
        <Svg.Rect x='21.5' y='335.75' rx='0' ry='0' width='362.96' height='14' />
        <Svg.Rect x='22.5' y='374.75' rx='0' ry='0' width='362' height='149' />
        <Svg.Rect x='21.5' y='551.25' rx='0' ry='0' width='362' height='101' />
        <Svg.Rect x='21.5' y='670.75' rx='0' ry='0' width='362.96' height='14' />
      </SvgAnimatedLinearGradient >
    </View>
  )
}

export default CustomLoading
