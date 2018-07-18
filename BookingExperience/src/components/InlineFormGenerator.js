import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons
} from '@expo/vector-icons';
let { width } = Dimensions.get('screen');
const InlineFromGenerator = props => {
  let IconTag = props.IconTag;
  let Component = '';

  //Dynamically generates Icons
  if (IconTag === 'Feather') {
    Component = (
      <Feather
        size={18}
        name={props.iconName}
        style={{
          paddingRight: 5,
          color: 'rgba(132, 146, 166, 1)'
        }}
      />
    );
  } else if (IconTag === 'MaterialCommunityIcons') {
    Component = (
      <MaterialCommunityIcons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 10, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'Ionicons') {
    Component = (
      <Ionicons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 10, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'FontAwesome') {
    Component = (
      <FontAwesome
        size={18}
        name={props.iconName}
        style={{ paddingRight: 10, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  } else if (IconTag === 'SimpleLineIcons') {
    Component = (
      <SimpleLineIcons
        size={18}
        name={props.iconName}
        style={{ paddingRight: 10, color: 'rgba(132, 146, 166, 1)' }}
      />
    );
  }

  return (
    <View style={{ paddingTop: 10 }}>
      <Text
        style={{
          fontSize: 13,
          paddingBottom: 8,
          color: 'rgba(132, 146, 166, 1)'
        }}>
        {props.name}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'flex-start',
          alignItems: 'center',
          borderBottomWidth: 1,
          paddingBottom: 5,
          borderBottomColor: 'rgba(237, 237, 237, 1)'
        }}>
        {Component}
        {props.type === 'inline' ? (
          <TextInput
            placeholder={`Type your ${props.name}`}
            style={{
              fontSize: 13,
              height: '100%',
              width: width / 2 - 80
            }}
          />
        ) : (
          <TextInput
            placeholder={`Type your ${props.name}`}
            style={{
              fontSize: 13,
              height: '100%',
              width: '100%'
            }}
          />
        )}
      </View>
    </View>
  );
};

export default InlineFromGenerator;
