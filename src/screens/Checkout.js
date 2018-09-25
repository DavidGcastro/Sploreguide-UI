import React, { Component } from 'react'
import {ScrollView, View, Dimensions} from 'react-native'
import CalendarScreen from '../components/CalenderScreen'
import PeopleQuantity from '../components/PeopleQuantity'

export default class Checkout extends Component {
  constructor () {
    super()
    this.state = {
      dateChosen: ''
    }
  }
  render () {
    return (
      <View style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center', flex: 1 }} >
        <CalendarScreen />
        {/* Remove Calendar screen to view people quantity */}
        <PeopleQuantity />
      </View>
    )
  }
}
