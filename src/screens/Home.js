import React from 'react'
import {
  Text,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight
} from 'react-native'
import { LinearGradient } from 'expo'
import styles from '../styles/home'
import buttonStyles from '../styles/buttons'

const Home = props => {
  return (
    <ImageBackground
      source={require('../assets/img/login-noOverlay.jpg')}
      style={styles.image}>
      {/* PARENT */}
      <LinearGradient
        style={{ flex: 1 }}
        colors={['rgba(48, 35, 174, 0.75)', 'rgba(83, 160, 253, 0.5)']}
        start={[0, 0]}>
        {/* OUTER */}
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around'
          }}>
          {/* top child */}
          <View style={styles.topChild}>
            <Image
              resizeMode='contain'
              style={styles.logo}
              source={require('../assets/img/logo-large.png')}
            />
            <Image
              resizeMode='contain'
              style={{
                width: 201,
                height: 40
              }}
              source={require('../assets/img/main-logo.png')}
            />
          </View>
          {/* bottom child */}
          <SafeAreaView style={{ flexDirection: 'row' }}>
            <SafeAreaView style={styles.bottomChild}>
              <TouchableHighlight
                underlayColor='white'
                onPress={() => handleLogin(props)}
                style={buttonStyles.transparentButton}>
                <Text style={buttonStyles.transparentButtonText}>LOGIN</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='white'
                onPress={() => handleSignup(props)}
                style={buttonStyles.transparentButton}>
                <Text style={buttonStyles.transparentButtonText}>SIGN UP</Text>
              </TouchableHighlight>
            </SafeAreaView>
          </SafeAreaView>
        </View>
      </LinearGradient>
    </ImageBackground>
  )
}

const handleLogin = props => {
  let navigate = props.navigation.navigate
  navigate('Login')
}
const handleSignup = props => {
  let navigate = props.navigation.navigate
  navigate('Signup')
}

export default Home
