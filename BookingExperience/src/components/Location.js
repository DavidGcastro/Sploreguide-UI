import React from 'react';
import { Text, View } from 'react-native';
import styles from '../styles/location';

const Location = props => {
  return (
    <View style={styles}>
      <Text style={{ color: 'rgba(132, 146, 166, 1)', fontSize: 16 }}>
        {props.location}
      </Text>
    </View>
  );
};

export default Location;
