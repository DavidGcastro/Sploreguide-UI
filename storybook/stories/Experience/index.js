import React from 'react'
import { View, Alert } from 'react-native'
import { storiesOf } from '@storybook/react-native'
import CenterView from '../CenterView'
import { ExperiencePreivewCard } from '../../../src/components/Experience'

storiesOf('Experiences', module)
  .add('previewCard', () => (
    <View>
      <ExperiencePreivewCard />
    </View>
  ))
