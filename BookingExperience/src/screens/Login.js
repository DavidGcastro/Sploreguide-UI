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
import { Feather } from '@expo/vector-icons';
import Hr from '../components/Hr';

import styles from '../styles/login';
import LoginForm from '../components/LoginForm';

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
          locations={[0, 0.5]}>
          {/* OUTER*/}
          <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
            <Feather
              name="arrow-left"
              size={32}
              color="white"
              style={{ marginTop: 40, marginLeft: 20 }}
            />
          </TouchableOpacity>
          <View style={styles.topChildLogin}>
            {/*FIRST CHILD*/}
            <View
              style={{
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center'
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
            {/*SECOND CHILD*/}
            <View style={styles.secondChild}>
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
            {/*THIRD CHILD*/}
            <Hr text={'OR'} />
            <View style={{ width: '80%' }}>
              <LoginForm name="Email" icon="person" />
              <LoginForm name="Password" icon="lock" />
            </View>
            {/*Last CHILD*/}
            <View
              style={{
                flex: 1,
                justifyContent: 'space-around',
                width: '80%'
              }}>
              <LinearGradient
                style={{ borderRadius: 5 }}
                colors={['rgba(48, 35, 174, 1)', 'rgba(83, 160, 253, 1)']}
                start={[0, 0.5]}
                end={[0.5, 1]}>
                >
                <TouchableOpacity>
                  <View
                    style={{
                      padding: 15,
                      borderRadius: 10,
                      alignItems: 'center'
                    }}>
                    <Text style={{ letterSpacing: 1, color: 'white' }}>
                      Login
                    </Text>
                  </View>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Login;
