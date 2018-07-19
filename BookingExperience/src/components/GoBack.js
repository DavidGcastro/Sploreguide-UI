import React from 'react';
import { Feather } from '@expo/vector-icons';

const GoBack = props => {
  return (
    <Feather
      name="arrow-left"
      size={32}
      color="white"
      style={{ marginTop: 40, marginLeft: 20 }}
    />
  );
};

export default GoBack;
