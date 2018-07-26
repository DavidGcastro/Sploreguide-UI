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
import { Feather } from '@expo/vector-icons';
import styles from '../styles/login';
import InlineFormGenerator from '../components/InlineFormGenerator';
import GradientButton from '../components/GradientButton';
import GoBack from '../components/GoBack';

const Signup = props => {
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
            <GoBack />
          </TouchableOpacity>
          <View style={styles.topChildLogin}>
            <KeyboardAvoidingView
              contentContainerStyle={{
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center'
              }}
              keyboardVerticalOffset={50}
              behavior="position">
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
              <Hr text="OR" />
              {/*FOURTH CHILD*/}

              <View
                style={{
                  width: '80%'
                }}>
                <InlineFormGenerator
                  name="Name"
                  IconTag="Ionicons"
                  iconName="ios-person-outline"
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}>
                  <InlineFormGenerator
                    name="Sex"
                    type="inline"
                    IconTag="Ionicons"
                    iconName="ios-transgender"
                  />
                  <InlineFormGenerator
                    name="Age"
                    type="inline"
                    IconTag="FontAwesome"
                    iconName="birthday-cake"
                  />
                </View>

                <InlineFormGenerator
                  name="Email"
                  IconTag="Ionicons"
                  iconName="ios-mail-open-outline"
                />
                <InlineFormGenerator
                  name="Password"
                  IconTag="Ionicons"
                  iconName="ios-lock-outline"
                />
              </View>

              {/*Last CHILD*/}
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  width: '80%'
                }}>
                <GradientButton text="Signup" />
              </View>
            </KeyboardAvoidingView>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Signup;
