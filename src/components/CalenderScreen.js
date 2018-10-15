import React from 'react'
import { Agenda } from 'react-native-calendars'
import { Entypo } from '@expo/vector-icons'
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'

const offerings = {
  '2018-10-22': [{ date: '2018-10-22', time: '7:00 PM - 9:00PM', text: '$2 cheaper' }, { date: '2018-10-22', time: '8:00 PM - 9:00PM' }, { date: '2018-10-22', time: '10:00 PM - 11:00PM' }],
  '2018-10-24': [{ date: '2018-10-24', time: '7:00 PM - 9:00PM' }],
  '2018-10-29': [{ date: '2018-10-29', time: '7:00 PM - 9:00PM' }],
  '2018-11-22': [{ date: '2018-11-22', time: '7:00 PM - 9:00PM' }]
}

let markedDates = Object.keys(offerings).reduce((dateObject, date) => {
  dateObject[date] = { marked: true, disabled: false }
  return dateObject
}, {})

export default class CalendarScreen extends React.Component {
  renderItem (item, thing, ok) {
    let displayText = item.time
    displayText += item.text ? ` | ${item.text}` : ''
    return (
      <View style={styles.item}>
        <TouchableOpacity onPress={() => this.props.changeTimeSelected(item)} >
          <Text
            data-txt={item.time}
            style={{ fontSize: 18, color: 'rgba(36, 37, 61, 1)', fontFamily: 'SF-UI-Text-Light' }}
          >
            {displayText}
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderEmptyDate () {
    return (
      <View style={[{ backgroundColor: '#eff3f7', justifyContent: 'space-evenly', flex: 1, alignItems: 'center' }]}>
        <Text style={{fontFamily: 'SF-UI-Text-Light', fontSize: 15}}>Experience unavailable on this date.</Text>
        <Image
          style={{
            width: 180,
            height: 180
          }}
          source={require('../assets/img/compass2.gif')}
        />
      </View>

    )
  }
  rowHasChanged (r1, r2) {
    return r1.time !== r2.time
  }

  render () {
    return (
      <Agenda
        markedDates={markedDates}
        // callback that gets called on day press
        // onDayPress={(day) => this.props.changeDateSelected(day)} */
        items={offerings}
        renderKnob={() => {
          return (<Entypo
            name={'chevron-thin-down'}
            size={25}
          />)
        }}
        minDate={new Date()}
        selected={this.props.dateSelected}
        renderItem={this.renderItem.bind(this)}
        renderEmptyData={this.renderEmptyDate.bind(this)}
        renderEmptyDate={() => <View />}
        rowHasChanged={this.rowHasChanged.bind(this)}
        monthFormat={'MMMM yyyy'}
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
