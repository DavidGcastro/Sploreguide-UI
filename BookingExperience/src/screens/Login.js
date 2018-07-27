import React from 'react';
import {
  Text,
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import { LinearGradient } from 'expo';
import Hr from '../components/Hr';
import GradientButton from '../components/GradientButton';
import styles from '../styles/login';
import InlineFromGenerator from '../components/InlineFormGenerator';
import GoBack from '../components/GoBack';

export default class Login extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}>
              <GoBack />
            </TouchableOpacity>
            <View style={styles.topChildLogin}>
              <KeyboardAvoidingView
                contentContainerStyle={{
                  justifyContent: 'space-between',
                  alignContent: 'center',
                  alignItems: 'center'
                }}
                keyboardVerticalOffset={0}
                behavior="position">
                {/*FIRST CHILD*/}
                <View
                  style={{
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    top: this.state.top
                  }}>
                  <Image
                    resizeMode="contain"
                    style={styles.logo}
                    source={require('../assets/img/Logo-Icon-gradient.png')}
                  />
                  <Text style={styles.titleLogin}> SploreGuide</Text>
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
                <Hr text="OR" />
                {/*FOURTH CHILD*/}
                <View style={{ width: '80%' }}>
                  <InlineFromGenerator
                    name="Email"
                    IconTag="Ionicons"
                    iconName="ios-mail-open-outline"
                  />
                  <InlineFromGenerator
                    name="Password"
                    type="login"
                    IconTag="Ionicons"
                    iconName="ios-lock-outline"
                  />
                </View>
                {/*Last CHILD*/}
                <View
                  style={{
                    height: 300,
                    justifyContent: 'center',
                    width: '90%'
                  }}>
                  <GradientButton text="Login" />
                </View>
              </KeyboardAvoidingView>
            </View>
          </LinearGradient>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
