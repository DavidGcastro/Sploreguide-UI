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
let images = [
  require('../assets/img/amsterdam.jpg'),
  require('../assets/img/nature.jpg'),
  require('../assets/img/nightlife.jpg')
];
import { Ionicons } from '@expo/vector-icons';
import previewCardStyle from '../styles/PreviewCard';
// Get screen dimensions
const { width, height } = Dimensions.get('window');

const PreviewCard = () => {
  return <View />;
};

export default PreviewCard;

// onPress={() => onOpen(experience)}>
