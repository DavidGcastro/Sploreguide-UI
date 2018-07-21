import { View, Text } from 'react-native';
import React from 'react';

import {
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons
} from '@expo/vector-icons';

const ActivityCard = props => {
  //Dynamically generates Icons
  let { IconTag } = props;
  let Component = '';
  if (IconTag === 'Feather') {
    Component = (
      <Feather
        size={25}
        name={props.iconName}
        style={{
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    );
  } else if (IconTag === 'MaterialCommunityIcons') {
    Component = (
      <MaterialCommunityIcons
        size={25}
        name={props.iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'Ionicons') {
    Component = (
      <Ionicons
        size={25}
        name={props.iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'FontAwesome') {
    Component = (
      <FontAwesome
        size={25}
        name={props.iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'SimpleLineIcons') {
    Component = (
      <SimpleLineIcons
        size={25}
        name={props.iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'EvilIcons') {
    Component = (
      <EvilIcons
        size={25}
        name={props.iconName}
        style={{ color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  }
  return (
    <View
      style={{
        borderRadius: 5,
        borderColor: 'rgba(132, 146, 166, .2)',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        height: 70,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        shadowOffset: { width: 3, height: 3},
        shadowColor: 'grey',
        shadowOpacity: 0.5,
        margin: 3
      }}>
      {Component}
      <Text
        style={{
          color: 'rgba(132, 146, 166, 1)',
          fontSize: 15
        }}>
        {props.label}
      </Text>
    </View>
  );
};

export default ActivityCard;
