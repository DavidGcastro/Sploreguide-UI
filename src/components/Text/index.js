import React, { Component } from 'react'
import propTypes from 'prop-types'
import { StyleSheet, Text } from 'react-native'
import { Font } from 'expo'
import colors from '../../styles/colors'

export default class OpenSansText extends Component {
  state = {
    fontLoaded: false
  }

  static propTypes = {
    color: propTypes.string,
    fontSize: propTypes.number,
    fontFamily: propTypes.string
  }

  static defaultProps = {
    color: colors.black,
    fontSize: 16,
    fontFamily: 'open-sans-regular'
  }

  async componentDidMount () {
    await Font.loadAsync({
      'open-sans-bold': require('../../assets/fonts/open-sans/OpenSans-Bold.ttf'),
      'open-sans-bold-italic': require('../../assets/fonts/open-sans/OpenSans-BoldItalic.ttf'),
      'open-sans-extra-bold': require('../../assets/fonts/open-sans/OpenSans-ExtraBold.ttf'),
      'open-sans-extra-bold-italic': require('../../assets/fonts/open-sans/OpenSans-ExtraBoldItalic.ttf'),
      'open-sans-italic': require('../../assets/fonts/open-sans/OpenSans-Italic.ttf'),
      'open-sans-light': require('../../assets/fonts/open-sans/OpenSans-Light.ttf'),
      'open-sans-light-italic': require('../../assets/fonts/open-sans/OpenSans-LightItalic.ttf'),
      'open-sans-regular': require('../../assets/fonts/open-sans/OpenSans-Regular.ttf'),
      'open-sans-semibold': require('../../assets/fonts/open-sans/OpenSans-Semibold.ttf'),
      'open-sans-semibold-italic': require('../../assets/fonts/open-sans/OpenSans-SemiboldItalic.ttf')
    })
    this.setState({ fontLoaded: true })
  }

  render () {
    let { fontLoaded } = this.state
    let { fontFamily, color, fontSize, children } = this.props
  
    return (
      fontLoaded ? 
        <Text style={{fontFamily, color, fontSize}}>
          {children}
        </Text>
      :
        <Text />
    )
  }
} 