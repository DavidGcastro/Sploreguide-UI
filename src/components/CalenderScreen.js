import React from 'react'
import { Agenda } from 'react-native-calendars'
import { Entypo } from '@expo/vector-icons'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const offerings =
    {

      '2018-10-22': [{ time: '7:00 PM - 9:00PM', text: '$2 cheaper' }, { time: '8:00 PM - 9:00PM' }, { time: '10:00 PM - 11:00PM' }],
      '2018-10-24': [{ time: '7:00 PM - 9:00PM' }],
      '2018-10-29': [{ time: '7:00 PM - 9:00PM' }],
      '2018-11-22': [{ time: '7:00 PM - 9:00PM' }],
      '2018': []

    }
let dateObj = {}
let markedDates = Object.keys(offerings).map(date => dateObj[date] = { marked: true, disabled: false })

export default class CalendarScreen extends React.Component {
  renderItem (item) {
    let displayText = item.time
    displayText += item.text ? ` | ${item.text}` : ''
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.props.changeTimeSelected(item)} >
          <Text
            data-txt={item.time}
            style={{ fontSize: 18, color: 'rgba(36, 37, 61, 1)' }}
          >
            {displayText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderEmptyDate () {
    return (
      <View style={styles.emptyDate}><Text style={{paddingLeft: 20}}>Experience unavailable on this date.</Text></View>
    )
  }

  rowHasChanged (r1, r2) {
    return r1.time !== r2.time
  }

  render () {
    return (
      <Agenda
        markedDates={dateObj}
        // callback that gets called on day press
        onDayPress={(day) => this.props.changeDateSelected(day)}
        items={offerings}
        renderKnob={() => {
          return (<Entypo
            name={'chevron-thin-down'}
            size={25}
            color={'blue'}
          />)
        }}
        renderItem={this.renderItem.bind(this)}
        renderEmptyData={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        monthFormat={'MMMM yyyy'}
        pastScrollRange={0}

        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={3}

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
