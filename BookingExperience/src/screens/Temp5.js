import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

class Temp5 extends React.Component {
  logout = () => {
    this.props.screenProps.deleteJWT()
  }

  render () {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center'
        }}>
        <TouchableOpacity
          onPress={this.logout}
        >
          <Text> Logout </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Temp5
