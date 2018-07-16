import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import styles from '../styles/login';
import buttonStyles from '../styles/buttons';

const Login = () => {
  return (
    <ImageBackground
      source={require('../assets/images/login.png')}
      style={styles.image}>
      {/* PARENT */}
      <View
        style={{
          flex: 1
        }}>
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
              source={require('../assets/icons/Logo-Icon.png')}
            />
            <Text style={styles.title}> EMBARK </Text>
            <Text style={styles.subtitle}> EXPERIENCE ALL WALKS OF LIFE</Text>
          </View>
          {/* bottom child*/}
          <SafeAreaView style={{ flexDirection: 'row' }}>
            <SafeAreaView style={styles.bottomChild}>
              <TouchableOpacity style={buttonStyles.transparentButton}>
                <Text style={buttonStyles.transparentButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity style={buttonStyles.transparentButton}>
                <Text style={buttonStyles.transparentButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </SafeAreaView>
          </SafeAreaView>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;
