import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TouchableHighlight
} from 'react-native';
import { LinearGradient } from 'expo';
import styles from '../styles/login';
import buttonStyles from '../styles/buttons';

const Home = () => {
  return (
    <ImageBackground
      source={require('../assets/img/login-noOverlay.jpg')}
      style={styles.image}>
      {/* PARENT */}
      <LinearGradient
        style={{ flex: 1 }}
        colors={['rgba(48, 35, 174, 0.75)', 'rgba(83, 160, 253, 0.5)']}
        start={[0, 0]}>
        {/* OUTER*/}
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around'
          }}>
          {/* top child */}
          <View style={styles.topChild}>
            <Image
              resizeMode="contain"
              style={styles.logo}
              source={require('../assets/img/Logo-Icon.png')}
            />
            <Text style={styles.title}> EMBARK </Text>
            <Text style={styles.subtitle}> EXPERIENCE ALL WALKS OF LIFE</Text>
          </View>
          {/* bottom child*/}
          <SafeAreaView style={{ flexDirection: 'row' }}>
            <SafeAreaView style={styles.bottomChild}>
              <TouchableHighlight
                underlayColor="white"
                onPress={() => console.log('Login')}
                style={buttonStyles.transparentButton}>
                <Text style={buttonStyles.transparentButtonText}>LOGIN</Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor="white"
                onPress={() => console.log('Sign up')}
                style={buttonStyles.transparentButton}>
                <Text style={buttonStyles.transparentButtonText}>SIGN UP</Text>
              </TouchableHighlight>
            </SafeAreaView>
          </SafeAreaView>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default Home;
