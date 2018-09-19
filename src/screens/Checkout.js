import React, { Component } from 'react'
import {ScrollView, View} from 'react-native'
import CalendarScreen from '../components/CalenderScreen'
export default class Checkout extends Component {
  constructor () {
    super()
    this.state = {
      dateChosen: ''
    }
  }
  render () {
    return (
      <ScrollView scrollEnabled={false} style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center', flex: 1 }} >
        <CalendarScreen />
      </ScrollView>
    )
  }
}
