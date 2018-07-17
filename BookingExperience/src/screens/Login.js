import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';
import LoginFrom from '../components/LoginForm';

import { Form, Item, Input, Label, Icon } from 'native-base';

//borrowing from home - styles for logo and title placement
import styles from '../styles/home';
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
            <Image
              style={{ marginTop: 40, marginLeft: 20 }}
              source={require('../assets/img/back-icon.png')}
            />
          </TouchableOpacity>
          <View style={styles.topChildLogin}>
            {/*FIRST CHILD*/}
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
            {/*SECOND CHILD*/}
            <View
              style={{
                width: '60%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignContent: 'flex-start'
              }}>
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

            <View style={{ width: '80%' }}>
              <LoginForm name="Email" icon="person" />
              <LoginForm name="Password" icon="lock" />
            </View>
            {/*Last CHILD*/}
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                width: '80%'
              }}>
              <LinearGradient
                style={{borderRadius: 5}}
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
