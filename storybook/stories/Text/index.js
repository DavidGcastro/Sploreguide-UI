import React from 'react'
import { View } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../CenterView'
import OpenSansText from '../../../src/components/Text'

storiesOf('Text/OpenSans', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('regular text', () => (
    <View>
      <OpenSansText>This is regular </OpenSansText>
    </View>
  ))
  .add('regular text font change', () => (
    <View>
      <OpenSansText fontSize={22}>This is regular </OpenSansText>
    </View>
  ))
  .add('regular text with color', () => (
    <View>
      <OpenSansText color={'green'}>This is regular </OpenSansText>
    </View>
  ))
  .add('bold italic text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-bold-italic'}>This is bold italic</OpenSansText>
    </View>
  ))
  .add('extra bold text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-extra-bold'}>This is extra bold</OpenSansText>
    </View>
  ))
  .add('extra bold italic text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-extra-bold-italic'}>This is extra bold italic</OpenSansText>
    </View>
  ))
  .add('italic text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-italic'}>This is italic</OpenSansText>
    </View>
  ))
  .add('light text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-light'}>This is light</OpenSansText>
    </View>
  ))
  .add('light italic text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-light-italic'}>This is light italic</OpenSansText>
    </View>
  ))
  .add('semibold text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-semibold'}>This is semibold</OpenSansText>
    </View>
  ))
  .add('semibold italic text', () => (
    <View>
      <OpenSansText fontFamily={'open-sans-semibold-italic'}>This is semibold italic</OpenSansText>
    </View>
  ))
