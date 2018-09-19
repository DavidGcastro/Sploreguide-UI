import React from 'react'
import { Calendar, Agenda } from 'react-native-calendars'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
const offerings =
    {
      '2018-09-22': [{ time: '7:00 PM - 9:00PM' }, { time: '8:00 PM - 9:00PM' }, { time: '10:00 PM - 11:00PM' }],
      '2018-09-24': [{ time: '7:00 PM - 9:00PM' }],
      '2018-09-29': [{ time: '7:00 PM - 9:00PM' }],
      '2018-10-22': [{ time: '7:00 PM - 9:00PM' }]

    }

export default class CalendarScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      daySelected: '',
      timeSlotSelected: ''
    }
  }
  render () {
    console.log(this.state)
    return (
      <Agenda
        // callback that fires when the calendar is opened or closed
        onCalendarToggled={(calendarOpened) => { console.log(calendarOpened) }}
        // callback that gets called on day press
        onDayPress={(day) => this.setState({daySelected: day})}
        // callback that gets called when day changes while scrolling agenda list
        onDayChange={(day) => { console.log('day changed') }}
        items={offerings}
        loadItemsForMonth={() => offerings}
        renderItem={this.renderItem.bind(this)}
        renderEmptyData={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        monthFormat={'MMMM yyyy'}

        theme={{
          calendarBackground: '#ffffff',
          textSectionTitleColor: 'rgba(36, 37, 61, 1)',
          selectedDayBackgroundColor: 'rgba(254, 207, 74, 1)',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#00adf5',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          monthTextColor: 'rgba(36, 37, 61, 1)',
          textMonthFontWeight: 'bold',
          textDayFontSize: 15,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16
        }}
      />
    )
  }
  renderItem (item) {
    return (
      <View style={styles.item}><TouchableOpacity ><Text onPress={(e) => console.log(e.target)}data-txt={item.time} style={{
        fontSize: 18, color: 'rgba(36, 37, 61, 1)' }}>{item.time}</Text></TouchableOpacity></View>
    )
  }
  renderEmptyDate () {
    return (
      <View style={styles.emptyDate}><Text style={{paddingLeft: 20}}>No Experiences Scheduled.</Text></View>
    )
  }

  rowHasChanged (r1, r2) {
    return r1.name !== r2.name
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
    height: 50

  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
})
