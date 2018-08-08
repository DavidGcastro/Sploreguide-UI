import React from 'react'
import { View, Alert } from 'react-native'
import { storiesOf } from '@storybook/react-native'

import CenterView from '../CenterView'

import { BasicButtonWithText } from '../../../src/components/Button'

storiesOf('Buttons', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with no text', () => (
    <View style={{width: 300}}>
      <BasicButtonWithText
        onPress={() => { Alert.alert('Pressed', 'I am pressed') }}
        buttonText={''} />
    </View>
  ))
  .add('with text', () => (
    <View style={{width: 300}}>
      <BasicButtonWithText
        onPress={() => { Alert.alert('Pressed', 'I am pressed') }}
        buttonText={'I am a button'} />
    </View>
  ))
