import React from 'react'
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableHighlight
} from 'react-native'
import { LinearGradient, Video } from 'expo'
import styles from '../styles/home'
import buttonStyles from '../styles/buttons'

const Home = props => {
  return (
    <View style={{flex: 1}}>
      <Video
        source={{ uri: 'https://track9.mixtape.moe/esmetu.m4v' }}
        shouldPlay
        isLooping
        resizeMode='cover'
        style={styles.video}
      />
      {/* PARENT */}
      <LinearGradient
        style={{ flex: 1 }}
        colors={['rgba(48, 35, 174, 0.2)', 'rgba(83, 160, 253, 0.2)']}
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
    </View>
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
