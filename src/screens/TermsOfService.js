import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import GoBack from '../components/GoBack'

const TermsOfService = props => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <GoBack color={'black'} />
      </TouchableOpacity>
      <Text> Terms of Service </Text>
    </View>

  )
}

export default TermsOfService
