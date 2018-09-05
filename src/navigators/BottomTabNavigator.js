import { createBottomTabNavigator } from 'react-navigation'
import Temp from '../screens/Temp'
import Favorites from '../screens/Favorites'
import Temp3 from '../screens/Temp3'
import Temp4 from '../screens/Temp4'
import Temp5 from '../screens/Temp5'
import Landing from '../screens/Landing'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'

const BottomTabNavigator = createBottomTabNavigator(
  {
    Landing: {
      screen: Landing,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-compass' size={40} color={tintColor} />
        )
      }
    },
    Favorites: {
      screen: Favorites,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-heart-outline' size={40} color={tintColor} />
        )
      }
    },
    Temp3: {
      screen: Temp3,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons name='magnify' size={60} color={tintColor} />
        ),
        tabVisible: false
      }
    },
    Temp4: {
      screen: Temp4,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name='ios-paper-plane-outline'
            size={40}
            color={tintColor}
          />
        )
      }
    },
    Temp5: {
      screen: Temp5,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='md-person' size={40} color={tintColor} />
        )
      }
    }
  },
  {
    navigationOptions: {
      tabBarOptions: {
        activeTintColor: 'rgba(71, 118, 226, 1)',
        inactiveTintColor: 'rgba(212, 212, 215, 1)',
        showLabel: false,
        style: {
          backgroundColor: 'white',
          borderTopColor: 'transparent',
          borderWidth: 0,
          height: 60,
          paddingHorizontal: 15,
          paddingVertical: 5
        }
      }
    }
  }
)

export default BottomTabNavigator
