import React, { Component } from 'react'
import MultiSlider from '@ptomasroos/react-native-multi-slider'

class PriceSlider extends Component {
    state = {
        query: {},
        priceRangeMin: '0',
        priceRangeMax: '100'
    }
  render () {
    return <MultiSlider
      onValuesChange={values => {
        this.setState({
          priceRangeMax: values[1],
          priceRangeMin: values[0],
          query: { ...query, priceRangeMin: values[0], priceRangeMax: values[1] }
        })
      }}
      values={[Number(x), Number(y)]}
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
