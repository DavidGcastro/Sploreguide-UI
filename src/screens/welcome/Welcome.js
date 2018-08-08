import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, View, TouchableOpacity, Text, StatusBar } from 'react-native'
import graphql from 'graphql-anywhere'
import PropTypes from 'prop-types'
import { Video } from 'expo'

import { LogoLoading } from '../../components/Loading'
import { handleFBLogin } from '../../services/facebook'
import deviceStorage from '../../services/deviceStorage'
import { fbLogin } from '../login/Login'
import logo from '../../assets/images/spglogo.png'
import bgVideo from '../../assets/videos/sploreguide_Video.mp4'

class Welcome extends Component {
  state = {
    loading: false
  }

  static navigationOptions = {
    header: null,
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  handleFBLogin = handleFBLogin.bind(this)

  useFB = () => {
    this.setState({loading: true})
    this.handleFBLogin()
  }

  render() {
    const { loading } = this.state

    return ( loading ?        
      <LogoLoading />
      :
      <View style={styles.container}>
        <MyStatusBar barStyle="light-content" />
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
          <TouchableOpacity style={styles.colorButton} onPress={this.useFB}>
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

export default fbLogin(Welcome)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  colorButton: {
    width: 300,
    backgroundColor: '#a76eff',
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
    flex: 8,
  },

  signUpWrapper: {
    flex: 4.5,
  }
})

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={{ backgroundColor }}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);
