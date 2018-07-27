import React from 'react';
import { LinearGradient } from 'expo';
import { View, TouchableOpacity, Text } from 'react-native';

const GradientButton = props => {
  return (
    <LinearGradient
      style={{ borderRadius: 5 }}
      colors={['rgba(48, 35, 174, 1)', 'rgba(83, 160, 253, 1)']}
      start={[0, 0.5]}
      end={[0.5, 1]}>
      >
      <TouchableOpacity>
        <View
          style={{
            padding: 15,
            borderRadius: 10,
            alignItems: 'center'
          }}>
          <Text
            style={{
              letterSpacing: 2,
              color: 'white',
              fontFamily: 'SF-UI-Text-Regular'
            }}>
            {props.text}
          </Text>
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GradientButton;
