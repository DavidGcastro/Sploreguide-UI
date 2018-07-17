import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

const LoginForm = props => {
  return (
    <View style={{ paddingBottom: 30 }}>
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
          name={props.icon}
        />
        <TextInput
          placeholder={`Type your ${props.name}`}
          style={{ fontSize: 13 }}
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
          <View />
        )}
      </View>
    </View>
  );
};

export default LoginForm;
