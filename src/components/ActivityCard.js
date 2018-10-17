import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/activityCard'
import createComponent from '../helpers/activityTypeIcon'

const ActivityCard = props => {
  let Component = createComponent(props.activity)
  return (
    <View style={styles}>
      {Component}
      <Text
        style={{
          color: 'rgba(132, 146, 166, 1)',
          fontSize: 12
        }}>
        {props.label}
      </Text>
    </View>
  )
}

export default ActivityCard
