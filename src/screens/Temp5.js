import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Query } from 'react-apollo'
import {
  CURRENT_USER
} from '../queries'

class Temp5 extends React.Component {
  logout = (client) => {
    this.props.screenProps.deleteJWT()
    client.resetStore()
  }

  render () {
    return (
      <Query query={CURRENT_USER}>
        {({ client, loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          favorites = data.currentUser.favorites
         return (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center'
            }}>
            <TouchableOpacity
              onPress={() => this.logout(client)}
            >
              <Text> Logout </Text>
            </TouchableOpacity>
          </View>
        )
      }}
      </Query>
    )
  }
}

export default Temp5
