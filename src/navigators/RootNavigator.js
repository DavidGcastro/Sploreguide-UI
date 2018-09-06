import { createStackNavigator } from 'react-navigation'
import PreviewNavigator from './PreviewNavigator'
import BottomTabNavigator from './BottomTabNavigator'
import Search from '../screens/Search'
import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER } from '../queries'
const RootNavigator = createStackNavigator(
  {
    BottomTabNavigator: { screen: BottomTabNavigator },
    PreviewNavigator: { screen: PreviewNavigator },
    Search: {
      screen: Search,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)

class RootNavigatorWrapper extends Component {
  render () {
    return (
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          return (
            <RootNavigator screenProps={{deleteJWT: this.props.deleteJWT, userInfo: data.currentUser}} />
          )
        }}
      </Query>
    )
  }
}

export default RootNavigatorWrapper
