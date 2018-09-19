import React from 'react'
import { Calendar, Agenda } from 'react-native-calendars'
import {Text, View, StyleSheet} from 'react-native'
const offerings =
    {
      '2018-09-22': [{ time: '7:00 PM - 9:00PM' }],
      '2018-09-24': [{ time: '7:00 PM - 9:00PM' }],
      '2018-09-29': [{ time: '7:00 PM - 9:00PM' }],
      '2018-10-22': [{ time: '7:00 PM - 9:00PM' }]

    }

export default class CalendarScreen extends React.Component {
  render () {
    return (
      <Agenda
        items={offerings}
        loadItemsForMonth={() => offerings}
        renderItem={this.renderItem.bind(this)}
        renderEmptyData={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        monthFormat={'MMMM yyyy'}
      />
    )
  }
  renderItem (item) {
    return (
      <View style={styles.item}><Text style={{fontSize: 18}}>{item.time}</Text></View>
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

  timeToString (time) {
    const date = new Date(time)
    return date.toISOString().split('T')[0]
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
