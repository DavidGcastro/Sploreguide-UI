import React, { Component } from 'react';
import Previews from '../components/Previews';
import experiences from '../experiences';
import GoBack from '../components/GoBack';
import { TouchableOpacity, View } from 'react-native';

const PreviewScreen = props => {
  console.log(props.navigation.state.params.category);
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Landing')}>
        <GoBack />
      </TouchableOpacity>
      <Previews
        experiences={experiences}
        onOpen={experience => {
          props.navigation.navigate('Experience', { experience });
        }}
      />
    </View>
  );
};

export default PreviewScreen;
