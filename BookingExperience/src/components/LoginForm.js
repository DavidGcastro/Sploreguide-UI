import React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { Icon } from 'native-base';
let { width } = Dimensions.get('window');

console.log(width - 175);

const LoginForm = props => {
  return (
    <View style={{ paddingTop: 20 }}>
      <Text
        style={{
          fontSize: 13,
          paddingBottom: 10,
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
        <Icon
          style={{ paddingRight: 10, color: 'rgba(132, 146, 166, .3)' }}
          active
          name={props.icon || 'person'}
        />
        (
        <TextInput
          placeholder={`Type your ${props.name}`}
          style={{
            fontSize: 13,
            width: width - 175,
            height: '100%'
          }}
        />
        {props.name === 'Password' ? (
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <TouchableOpacity>
              <Text style={{ fontSize: 13, color: 'rgba(132, 146, 166, .8)' }}>
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flex: 1, alignItems: 'flex-end' }} />
        )}
      </View>
    </View>
  );
};

export default LoginForm;

// {props.name === 'Email' ? (
//   <TextInput
//     textContentType="emailAddress"
//     keyboardType="email-address"
//     placeholder={`Type your ${props.name}`}
//     style={{
//       fontSize: 13,
//       backgroundColor: 'red',
//       width: '100%',
//       height: '100%'
//     }}
//   />
// ) :
