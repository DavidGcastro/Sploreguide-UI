import React, { Component } from 'react';
import MainSearch from '../components/MainSearch';
import {
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles';
import { Ionicons } from '@expo/vector-icons';

let { width } = Dimensions.get('window');
import { ifIphoneX, getStatusBarHeight } from 'react-native-iphone-x-helper';

export default class Landing extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          ...ifIphoneX(
            {
              paddingTop: getStatusBarHeight()
            },
            {
              paddingTop: 30
            }
          ),
          alignContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255, 255, 255, 1)'
        }}>
        <View onTouchEnd={() => this.props.navigation.navigate('Search')}>
          <MainSearch />
        </View>
        <View
          style={{
            width: width - 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            alignContent: 'center'
          }}>
          <Text
            style={{
              color: 'rgba(48, 55, 64, 1)',
              fontSize: 18,
              fontFamily: 'SF-UI-Text-Bold',
              paddingTop: 20
            }}>
            Top Trending
          </Text>

          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row'
            }}>
            <Text
              style={{
                color: 'rgba(48, 55, 64, 1)',
                fontSize: 15,
                paddingRight: 10
              }}>
              View All
            </Text>

            <Ionicons
              name="md-arrow-forward"
              size={30}
              color="'rgba(48, 55, 64, 1)'"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
