import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo';

//borrowing from home - styles for logo and title placement
import styles from '../styles/home';

const Login = props => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/img/login-noOverlay.jpg')}
        style={styles.image}>
        {/* PARENT */}
        <LinearGradient
          style={{ flex: 1 }}
          colors={['rgba(255, 255, 255, .7)', 'rgba(255, 255, 255, 1)']}
          locations={[0, 0.6]}>
          {/* OUTER*/}
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Image
              style={{ marginTop: 40, marginLeft: 20 }}
              source={require('../assets/img/back-icon.png')}
            />
          </TouchableOpacity>
          <View style={styles.topChildLogin}>
            <View
              style={{
                alignItems: 'center',
                alignContent: 'center'
              }}>
              <Image
                resizeMode="contain"
                style={styles.logo}
                source={require('../assets/img/Logo-Icon-gradient.png')}
              />
              <Text style={styles.titleLogin}> EMBARK </Text>
              <Text style={styles.subtitleLogin}>
                EXPERIENCE ALL WALKS OF LIFE
              </Text>
            </View>
            <View
              style={{
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'flex-end'
              }}>
              <Image
                style={styles.socialIcons}
                resizeMode="contain"
                source={require('../assets/img/facebook.png')}
              />
              <Image
                style={styles.socialIcons}
                resizeMode="contain"
                source={require('../assets/img/twitter.png')}
              />
              <Image
                style={styles.socialIcons}
                resizeMode="contain"
                source={require('../assets/img/googleplus.png')}
              />
            </View>
            <Text>
              <Text style={{ fontSize: 11 }}> OR</Text>
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
