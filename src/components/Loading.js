import React, { Component } from 'react'
import { StyleSheet, View, Animated, Easing, Text } from 'react-native'
//import logo from '../assets/img/Logo-Blue.png'


const styles = StyleSheet.create({
  loadingContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
})
class Loading extends Component {
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
        duration: 1200,
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
          <View> <Text>Hello loader</Text> </View>

          <Animated.Image style={{transform: [{rotate: spin}], width:50, height:50}} source={require('../assets/img/Logo-Blue.png')} />
        </View>
      </View>
    )
  }
}

export default Loading