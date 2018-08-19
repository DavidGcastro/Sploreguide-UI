import React, { Component } from 'react';
import Previews from '../components/Previews';
import { experiences } from '../data';

const PreviewScreen = props => {
  return (
    <Previews
      experiences={experiences}
      onOpen={experience => {
        props.navigation.navigate('Experience', { experience });
      }}
    />
  );
};

export default PreviewScreen;
