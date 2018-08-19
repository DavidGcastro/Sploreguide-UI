import React from 'react';
import { View, Text } from 'react-native';
import {
  EvilIcons,
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons
} from '@expo/vector-icons';

const InlineIcon = props => {
  //Dynamically generates Icons
  let { IconTag } = props;
  let Component = '';
  if (IconTag === 'Feather') {
    Component = (
      <Feather
        size={18}
        name={props.iconName}
        style={{
          paddingRight: 3,
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    );
  } else if (IconTag === 'MaterialCommunityIcons') {
    Component = (
      <MaterialCommunityIcons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 3, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'Ionicons') {
    Component = (
      <Ionicons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 3, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'FontAwesome') {
    Component = (
      <FontAwesome
        size={18}
        name={props.iconName}
        style={{ paddingRight: 3, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'SimpleLineIcons') {
    Component = (
      <SimpleLineIcons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 3, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'EvilIcons') {
    Component = (
      <EvilIcons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 3, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  }
  return (
    <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginBottom: 10 }}>
      {Component}
      <Text style={{color: 'rgba(132, 146, 166, 1)', fontSize: 13}}> {props.label} </Text>
    </View>
  );
};

export default InlineIcon;
