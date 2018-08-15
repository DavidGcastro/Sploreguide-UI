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
import formStyles from '../styles/formStyles';
import GoBack from '../components/GoBack';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class Signup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
      email: '',
      Password: '',
      sex: '',
      dob: ''
    };
    this.sexInput = React.createRef();
    this.birthInput = React.createRef();
    this.emailInput = React.createRef();
    this.passwordInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput(inputToFocus) {
    inputToFocus.current.focus();
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
            style={{ marginBottom: 51 }}
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

            <View
              style={{
                marginBottom: '10%',
                justifyContent: 'center',
                alignContent: 'center',
                alignItems: 'center',
                width: '100%'
              }}>
              <View style={formStyles.parent}>
                {/*FIRST FORM*/}
                <View style={{ paddingTop: 20 }}>
                  <Text style={formStyles.formText}>Name</Text>
                  <View style={formStyles.inputIconContainer}>
                    <Ionicons
                      name="ios-person-outline"
                      size={18}
                      style={formStyles.iconStyles}
                    />
                    <TextInput
                      onChangeText={x => this.setState({ name: x })}
                      onSubmitEditing={() => this.focusTextInput(this.sexInput)}
                      returnKeyType="next"
                      placeholder="Type your Name"
                      style={{
                        fontSize: 13,
                        width: '80%'
                      }}
                    />
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'flex-end'
                  }}>
                  {/*SECOND FORM*/}
                  <View
                    style={{
                      paddingTop: 20,
                      paddingRight: 10
                    }}>
                    <Text style={formStyles.formText}>Sex</Text>
                    <View style={formStyles.inputIconContainerHalf}>
                      <Ionicons
                        name="ios-transgender"
                        size={18}
                        style={{
                          paddingRight: 10,
                          color: 'rgba(132, 146, 166, 1)'
                        }}
                      />
                      <TextInput
                        ref={this.sexInput}
                        onChangeText={x => this.setState({ sex: x })}
                        onSubmitEditing={() =>
                          this.focusTextInput(this.birthInput)
                        }
                        returnKeyType="next"
                        placeholder="Choose your Sex"
                        style={{
                          fontSize: 13,
                          width: '50%'
                        }}
                      />
                    </View>
                  </View>
                  <View style={{ paddingTop: 20 }}>
                    <Text
                      style={{
                        fontSize: 13,
                        paddingBottom: 8,
                        color: 'rgba(132, 146, 166, 1)'
                      }}>
                      Birth Date
                    </Text>
                    <View style={formStyles.inputIconContainerHalf}>
                      <FontAwesome
                        name="birthday-cake"
                        size={18}
                        style={formStyles.iconStyles}
                      />
                      <TextInput
                        ref={this.birthInput}
                        onChangeText={x => this.setState({ dob: x })}
                        onSubmitEditing={() =>
                          this.focusTextInput(this.emailInput)
                        }
                        returnKeyType="next"
                        placeholder="Enter Birth Date"
                        style={{
                          fontSize: 13,
                          width: '50%'
                        }}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ paddingTop: 20 }}>
                  <Text style={formStyles.formText}>Email</Text>
                  <View style={formStyles.inputIconContainer}>
                    <Ionicons
                      name="ios-mail-open-outline"
                      size={18}
                      style={formStyles.iconStyles}
                    />
                    <TextInput
                      ref={this.emailInput}
                      onChangeText={x => this.setState({ email: x })}
                      returnKeyType="next"
                      placeholder="Type your Email"
                      onSubmitEditing={() =>
                        this.focusTextInput(this.passwordInput)
                      }
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
                      ref={this.passwordInput}
                      onChangeText={x => this.setState({ password: x })}
                      secureTextEntry={true}
                      returnKeyType="next"
                      placeholder="Type your Password"
                      style={{
                        fontSize: 13,
                        width: '80%'
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{ width: '90%' }}
              onPress={() => this.props.navigation.navigate('Landing')}>
              <GradientButton text="SIGNUP" />
            </TouchableOpacity>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    );
  }
}
