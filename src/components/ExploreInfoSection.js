import React from 'react'
import {Text, View, Image} from 'react-native'

const ExploreInfoSection = props => {
  let {border} = props
  let header = props.hostImage
    ? <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
      <Text style={{
        fontSize: 14,
        fontFamily: 'SF-UI-Text-Semibold',
        color: 'rgba(36, 37, 61, 1)'
      }}>{props.heading}</Text>
      <Image source={{uri: props.hostImage}} style={{ width: 50, height: 50, borderRadius: 25 }} />
    </View>
    : <View style={{ justifyContent: 'space-between' }} >
      <Text style={{
        fontSize: 14,
        fontFamily: 'SF-UI-Text-Semibold',
        color: 'rgba(36, 37, 61, 1)'
      }}>{props.heading}</Text></View>

  return <View style={{
    margin: 20,
    justifyContent: 'space-between',
    borderColor: 'rgba(151, 151, 151, .3)',
    borderBottomWidth: border ? 1 : 0
  }}>
    {header}
    <Text style={{
      fontSize: 13,
      fontFamily: 'SF-UI-Text-Semibold',
      color: 'rgba(74, 74, 74, 1)',
      lineHeight: 17,
      paddingVertical: 20
    }}>{props.content}</Text>
  </View>
}

export default ExploreInfoSection
