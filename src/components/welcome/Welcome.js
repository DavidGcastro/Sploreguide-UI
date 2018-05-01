import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Video } from 'expo'
import PropTypes from 'prop-types'

import logo from '../../images/spglogo.png'
import bgVideo from '../../assets/SGVideo.mp4'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },

  colorButton: {
    width: 300,
    backgroundColor: 'rgba(241, 30, 94, .8)',
    borderRadius: 25,
    paddingVertical: 9,
  },

  transButton: {
    width: 300,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 25,
    marginVertical: 25,
    paddingVertical: 9,
  },

  buttonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

  logo: {
    width: Dimensions.get('window').width * 1.25,
    height: 100,
  },

  logInWrapper: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 35,
    marginHorizontal: 15,
    alignSelf: 'flex-end',
  },

  logoWrapper: {
    flex: 2,
  },

  signUpWrapper: {
    flex: 1.5,
  },
})

export class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          isLooping
          source={bgVideo}
          shouldPlay
          resizeMode="cover"
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.logInWrapper}>
          <TouchableOpacity
            style={styles.signinButton}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.logoWrapper}>
          <Image style={styles.logo} source={logo} />
        </View>

        <View style={styles.signUpWrapper}>
          <TouchableOpacity style={styles.colorButton}>
            <Text style={styles.buttonText}> Continue with Facebook </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.transButton}
            onPress={() => this.props.navigation.navigate('SignUp')}
          >
            <Text style={styles.buttonText}> Sign Up </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

// Welcome.propTypes = {
//   navigation: PropTypes.object.isRequired,
// };
