import React, { Component } from 'react';
import Previews from '../components/Previews';
import { experiences } from '../data';

export default class PreviewScreen extends Component {
  render() {
    return (
      <Previews
        experiences={experiences}
        onOpen={experience => {
          this.props.navigation.navigate('Experience', { experience });
        }}
      />
    );
  }
}
