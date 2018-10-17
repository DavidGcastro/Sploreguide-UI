import { createBottomTabNavigator } from 'react-navigation'
import Favorites from '../screens/Favorites'
import Temp3 from '../screens/Temp3'
import Inbox from '../screens/Inbox'
import Temp5 from '../screens/Temp5'
import Landing from '../screens/Landing'
import { Ionicons, EvilIcons } from '@expo/vector-icons'
import React from 'react'

const BottomTabNavigator = createBottomTabNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name='search' size={40} color={tintColor} />
        )
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name='heart' size={40} color={tintColor} />
        )
      }
    },
    Temp3: {
      screen: Temp3,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name='location' size={40} color={tintColor} />
        ),
        tabVisible: false
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <EvilIcons name='envelope' size={40} color={tintColor} />
        )
      }
    },
    Temp5: {
      screen: Temp5,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-person-outline' size={40} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      gesturesEnabled: true,
      tabBarOptions: {
        activeTintColor: 'rgba(71, 118, 226, 1)',
        inactiveTintColor: 'rgba(212, 212, 215, 1)',
        showLabel: false,
        style: {
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          borderWidth: 0,
          height: 50,
          paddingHorizontal: 15,
          paddingVertical: 5
        }
      }
    }
  }
)

export default BottomTabNavigator
