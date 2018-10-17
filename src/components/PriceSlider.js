import React, { Component } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import {Dimensions} from 'react-native'
let {width} = Dimensions.get('window')

class PriceSlider extends Component {
  render () {
    let {handlePriceChange, min, max} = this.props
    return <MultiSlider
      onValuesChange={values => {
        handlePriceChange(values)
      }}
      values={[min, max]}
      sliderLength={width - 60}
      min={0}
      max={500}
      step={1}
      allowOverlap
      snapped
      markerOffsetX={0}
      markerStyle={{
        height: 12,
        width: 12,
        borderColor: 'rgba(83, 160, 253, 1)',
        borderWidth: 2,
        backgroundColor: 'rgba(48, 35, 174, 1)',
        shadowOffset: {
          width: 0,
          height: 0
        },
        shadowRadius: 2,
        shadowOpacity: 10
      }}
      trackStyle={{
        height: 3,
        backgroundColor: 'rgba(83, 160, 253, 1)'
      }}
    />
  }
}

export default PriceSlider
