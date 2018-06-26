import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CenterView from '../CenterView'

import colors from '../../../src/styles/colors'
import { TextInputField } from '../../../src/components/Input'

storiesOf('Text Input', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('with no text', () => (
    <TextInputField
      labelText='Email Address'
      labelTextSize={14}
      labelColor={colors.gray}
      borderBottomColor={colors.gray}
      placeholderText='Email'
      inputType='email' />
  ))
  .add('with text', () => (
    <TextInputField
      labelText='Email Address'
      labelTextSize={14}
      labelColor={colors.gray}
      borderBottomColor={colors.gray}
      placeholderText='Email'
      inputType='email' />
  ))
