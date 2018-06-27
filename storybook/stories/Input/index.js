import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import CenterView from '../CenterView'

import colors from '../../../src/styles/colors'
import { TextInputField } from '../../../src/components/Input'

storiesOf('Text Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with no icon', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='Email'
        inputType='email' />
    </View>
  ))
  .add('with icon email-outline', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='Email'
        inputIcon={'email-outline'}
        inputType='email' />
    </View>
  ))
  .add('with icon unlock', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='Password'
        inputIcon={'unlock'} />
    </View>
  ))
  .add('with icon ios-person-outline', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='First name'
        inputIcon={'ios-person-outline'} />
    </View>
  ))
  .add('with icon calendar', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='Date of birth'
        inputIcon={'calendar'} />
    </View>
  ))
  .add('with icon v-card', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='random'
        inputIcon={'v-card'} />
    </View>
  ))
  .add('with icon and secure text', () => (
    <View style={{width: 300}}>
      <TextInputField
        borderBottomColor={colors.gray}
        innerOnChangeText={() => { console.log('i am clicked') }}
        innerReturnKeyType={'next'}
        placeholderText='Password'
        inputIcon={'unlock'}
        secureInput />
    </View>
  ))
