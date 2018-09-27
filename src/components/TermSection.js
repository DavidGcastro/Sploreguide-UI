import React from 'react'
import { View, Text } from 'react-native'

const TermSection = props => {
  let { heading, content, border } = props
  let sectionStyle = border ? { borderColor: 'rgba(151, 151, 151, .3)', borderBottomWidth: 1 } : {}
  return (
    <View style={[sectionStyle, {justifyContent: 'center', paddingVertical: 30}]}>
      <Text style={{ fontSize: 20, fontFamily: 'SF-UI-Text-Bold', paddingBottom: 20 }}>{heading}</Text>
      <Text style={{fontFamily: 'SF-UI-Text-Light'}}>{content}</Text>
    </View>
  )
}

export default TermSection
