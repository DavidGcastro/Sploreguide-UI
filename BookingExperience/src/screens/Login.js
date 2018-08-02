import React from 'react';
import {
 
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,

} from 'react-native';
import { LinearGradient } from 'expo';
import Hr from '../components/Hr';
import GradientButton from '../components/GradientButton';
import styles from '../styles/login';
import InlineFormGenerator from '../components/InlineFormGenerator';
import GoBack from '../components/GoBack';

export default class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <ImageBackground
        source={require('../assets/img/login-noOverlay.jpg')}
        style={styles.image}>
        {/* PARENT */}
        <LinearGradient
          style={{ flex: 1 }}
          colors={['rgba(255, 255, 255, .7)', 'rgba(255, 255, 255, 1)']}
          locations={[0, 0.5]}>
          <TouchableOpacity
            style={{ marginBottom: 61 }}
            onPress={() => this.props.navigation.navigate('Home')}>
            <GoBack />
          </TouchableOpacity>
          <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../assets/img/Logo-Blue.png')}
              />
              <Image
                resizeMode="contain"
                style={{ width: 201, height: 40 }}
                source={require('../assets/img/title-gradient.png')}
              />
            </View>
            <View style={styles.iconParent}>
              <View style={styles.iconContainer}>
                <TouchableOpacity>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/facebook.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/twitter.png')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.socialIcons}
                    resizeMode="contain"
                    source={require('../assets/img/googleplus.png')}
                  />
                </TouchableOpacity>
              </View>
              <Hr text="OR" />
            </View>

            <View style={styles.formParent}>
              <View style={{ width: '80%', justifyContent: 'space-between' }}>
                <InlineFormGenerator
                  name="Email"
                  IconTag="Ionicons"
                  iconName="ios-mail-open-outline"
                />
                <InlineFormGenerator
                  name="Password"
                  type="login"
                  IconTag="Ionicons"
                  iconName="ios-lock-outline"
                />
              </View>
            </View>
            <TouchableOpacity
              style={{ width: '90%' }}
              onPress={() => this.props.navigation.navigate('Landing')}>
              <GradientButton text="LOGIN" />
            </TouchableOpacity>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
