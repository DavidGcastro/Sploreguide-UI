import React from 'react';
import { LinearGradient } from 'expo';
import { View, Text } from 'react-native';

const GradientButton = props => {
  return (
    <LinearGradient
      style={{ borderRadius: 5 }}
      colors={['rgba(48, 35, 174, 1)', 'rgba(83, 160, 253, 1)']}
      start={[0, 0.5]}
      end={[0.5, 1]}>
      >
      <View
        style={{
          padding: 15,
          borderRadius: 10,
          alignItems: 'center'
        }}>
        <Text
          style={{
            color: 'white',
            fontSize: 16,
            fontFamily: 'SF-UI-Text-Medium',
            letterSpacing: 2
          }}>
          {props.text}
        </Text>
      </View>
    </LinearGradient>
  );
};

export default GradientButton;
