import React from 'react';
import { Text, View } from 'react-native';

const Location = props => {
  return (
    <View
      style={{
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: 'rgba(132, 146, 166, .2)',
        alignItems: 'flex-start',
        height: 50,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        shadowOffset: { width: 2, height: 2 },
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        marginVertical: 3
      }}>
      <Text style={{ color: 'rgba(132, 146, 166, 1)', fontSize: 16 }}>
        {props.location}
      </Text>
    </View>
  );
};

export default Location;
