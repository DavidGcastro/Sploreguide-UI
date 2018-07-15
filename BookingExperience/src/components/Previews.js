/*
* @Author: Abhi
* @Date:   2018-06-27 17:36:42
* @Last Modified by:   Abhi
* @Last Modified time: 2018-06-30 23:20:41
*/

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View
} from 'react-native';
import PreviewCard from './PreviewCard';
import PropTypes from 'prop-types';

export default class Previews extends Component {
  // Component prop types
  static propTypes = {
    // experience object with title, genre, and poster
    experiences : PropTypes.array.isRequired,
    onOpen      : PropTypes.func.isRequired
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          // Hide all scroll indicators
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          {this.props.experiences.map((experience, index) => <PreviewCard 
            experience={experience}
            onOpen={this.props.onOpen}
            key={index}
          />)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,         // start below status bar
  },
  scrollContent: {
    flexDirection: 'row',   // arrange posters in rows
    flexWrap: 'wrap',       // allow multiple rows
  },
});