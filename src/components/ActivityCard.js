import { View, Text } from 'react-native'
import React from 'react'
import styles from '../styles/activityCard'
import {
  MaterialCommunityIcons,
  FontAwesome,
  MaterialIcons,
  Entypo
} from '@expo/vector-icons'
import findActivityIcon from '../helpers/activityTypeIcon'

const ActivityCard = props => {
  let { activity, label } = props
  let { IconTag, iconName } = findActivityIcon(activity)
  let Component = ''

  if (IconTag === 'Feather') {
    Component = (
      <Feather
        size={35}
        name={iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    )
  } else if (IconTag === 'MaterialCommunityIcons') {
    Component = (
      <MaterialCommunityIcons
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  } else if (IconTag === 'Entypo') {
    Component = (
      <Entypo
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  } else if (IconTag === 'MaterialIcons') {
    Component = (
      <MaterialIcons
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  } else if (IconTag === 'Ionicons') {
    Component = (
      <Ionicons
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  } else if (IconTag === 'FontAwesome') {
    Component = (
      <FontAwesome
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  } else if (IconTag === 'SimpleLineIcons') {
    Component = (
      <SimpleLineIcons
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  } else if (IconTag === 'EvilIcons') {
    Component = (
      <EvilIcons
        size={35}
        name={iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    )
  }
  return (
    <View style={styles}>
      {Component}
      <Text
        style={{
          color: 'rgba(132, 146, 166, 1)',
          fontSize: 12
        }}>
        {label}
      </Text>
    </View>
  )
}

export default ActivityCard
