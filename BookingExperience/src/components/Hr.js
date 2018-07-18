import React from 'react';
import { View, Text, Dimensions } from 'react-native';

let { width } = Dimensions.get('window');

const Hr = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
      }}>
      <View
        style={{
          borderWidth: 0.75,
          borderColor: 'rgba(237, 237, 237, 1)',
          width: width / 2 - 100
        }}
      />
      <Text
        style={{
          paddingHorizontal: 10,
          fontSize: 10,
          letterSpacing: 1,
          color: 'rgba(132, 146, 166, .8)'
        }}>
        {props.text}
      </Text>
      <View
        style={{
          borderWidth: 0.75,
          borderColor: 'rgba(237, 237, 237, 1)',
          width: width / 2 - 100
        }}
      />
    </View>
  );
};

export default Hr;
