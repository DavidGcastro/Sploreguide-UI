import React from 'react';
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {
  Feather,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  SimpleLineIcons
} from '@expo/vector-icons';
let { width } = Dimensions.get('screen');
const InlineFormGenerator = props => {
  let IconTag = props.IconTag;
  let Component = '';
  let type = props.type;

  let passwordReset =
    type === 'login' ? (
      <TouchableOpacity>
        <Text style={{ fontSize: 12, color: 'rgba(132,146,166,1)' }}>
          Forgot?
        </Text>
      </TouchableOpacity>
    ) : (
      ''
    );

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
    <View style={{ paddingTop: 20 }}>
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
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          paddingBottom: 5,
          borderBottomColor: 'rgba(237, 237, 237, 1)'
        }}>
        {props.type === 'inline' ? (
          <TextInput
            placeholder={`Type your ${props.name}`}
            returnKeyType="next"
            style={{
              fontFamily: 'SF-UI-Text-Regular',
              fontSize: 13,
              height: '100%',
              width: width / 2 - 80
            }}
          />
        ) : (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center'
            }}>
            <View style={{ flexDirection: 'row' }}>
              {Component}
              <TextInput
                returnKeyType="next"
                placeholder={`Type your ${props.name}`}
                style={{
                  fontSize: 13,
                  width: '80%'
                }}
              />
            </View>
            {passwordReset}
          </View>
        )}
      </View>
    </View>
  );
};

export default InlineFormGenerator;
