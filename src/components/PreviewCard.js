import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import previewCardStyle from '../styles/PreviewCard';

const PreviewCard = props => {
  console.log(props);
  return (
    <ImageBackground
      style={{
        width: 335,
        height: 199,
        justifyContent: 'center',
        marginVertical: 10
      }}
      imageStyle={{ borderRadius: 5 }}
      source={props.experience.media}>
      <Text>Hello</Text>
    </ImageBackground>
  );
};

export default PreviewCard;

// onPress={() => onOpen(experience)}>
