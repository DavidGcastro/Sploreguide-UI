import React, { Component } from 'react'
import { StyleSheet, View, Animated, Easing } from 'react-native'
import logo from '../images/sg_symbol.png'


const styles = StyleSheet.create({
  loadingContainer: {
    flex:1,
    backgroundColor: '#c70039',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
class LogoLoading extends Component {
  state = {
    spinValue: new Animated.Value(0)
  }

  componentDidMount() {
    this.spin()
  }

  spin(start=0, finish=1) {
    this.state.spinValue.setValue(start)
    Animated.timing(
      this.state.spinValue,
      {
        toValue: finish,
        duration: 1500,
        easing: Easing.linear,                
        useNativeDriver: true
      }
    ).start(() => this.spin(!start, !finish))
  }

  render() {
    const { spinValue } = this.state

    const spin = spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '270deg']
    })

    return (
      <View style={styles.loadingContainer}>
        <View style={styles.loadingSymbolWrapper}>
          <Animated.Image style={{transform: [{rotate: spin}]}} source={logo} />
        </View>
      </View>
    )
  }
}

export default LogoLoading