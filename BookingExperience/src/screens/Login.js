import React from 'react';
import {
  ImageBackground,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Text,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo';
import Hr from '../components/Hr';
import GradientButton from '../components/GradientButton';
import styles from '../styles/login';
import GoBack from '../components/GoBack';
import { Ionicons } from '@expo/vector-icons';
import formStyles from '../styles/formStyles';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
    this.passwordInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    this.passwordInput.current.focus();
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
              <View style={formStyles.parent}>
                <View style={{ paddingTop: 20 }}>
                  <Text style={formStyles.formText}>Email</Text>
                  <View style={formStyles.inputIconContainer}>
                    <Ionicons
                      name="ios-mail-open-outline"
                      size={18}
                      style={formStyles.iconStyles}
                    />
                    <TextInput
                      onChangeText={x => this.setState({ email: x })}
                      returnKeyType="next"
                      placeholder="Type your Email"
                      onSubmitEditing={() => this.focusTextInput()}
                      style={{
                        fontSize: 13,
                        width: '80%'
                      }}
                    />
                  </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                  <Text style={formStyles.formText}>Password</Text>
                  <View style={formStyles.inputIconContainer}>
                    <Ionicons
                      name="ios-lock-outline"
                      size={18}
                      style={formStyles.iconStyles}
                    />
                    <TextInput
                      onChangeText={x => this.setState({ password: x })}
                      ref={this.passwordInput}
                      secureTextEntry={true}
                      returnKeyType="next"
                      placeholder="Type your Password"
                      style={{
                        fontSize: 13,
                        width: '80%'
                      }}
                    />
                    <TouchableOpacity>
                      <Text
                        style={{ fontSize: 12, color: 'rgba(132,146,166,1)' }}>
                        Forgot?
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
