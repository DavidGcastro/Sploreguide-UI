import React from 'react'
import { storiesOf } from '@storybook/react-native'

import CenterView from '../CenterView'

import { Stars } from '../../../src/components/Review'

storiesOf('Review', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Stars', () => (
    <Stars quantity={3} />
  ))
