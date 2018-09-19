import React from 'react'
import { Calendar, Agenda } from 'react-native-calendars'
import {Text, View} from 'react-native'

export default class CalendarScreen extends React.Component {
  constructor () {
    super()
    this.state = {
      selectedDay: '',
      dataSelected: false
    }
  }
  render () {
    console.log(this.state.selectedDay)
    return <View style={{flex: 1, paddingTop: 10}}>
      <Calendar
        theme={{
          textSectionTitleColor: 'rgba(36, 37, 61, 1)',
          selectedDayBackgroundColor: 'rgba(254, 207, 74, 1)',
          selectedDayTextColor: '#ffffff',
          dayTextColor: 'rgba(84, 99, 117, 1)',
          textDisabledColor: 'rgba(36, 37, 61, 0.28)',
          arrowColor: 'rgba(254, 207, 74, 1)',
          monthTextColor: 'rgba(36, 37, 61, 1)',
          textMonthFontWeight: 'bold',
          textDayFontSize: 15,
          textMonthFontSize: 18,
          textDayHeaderFontSize: 15
        }}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={(day) => this.setState({selectedDay: day.dateString})}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={(day) => { console.log('selected day', day) }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        monthFormat={'MMMM yyyy'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={(month) => { console.log('month changed', month) }}
        // Hide month navigation arrows. Default = false
        // Do not show days of other months in month page. Default = false
        hideExtraDays
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        firstDay={1}
        markedDates={{ [this.state.selectedDay]: { selected: true, disableTouchEvent: true } }}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        onPressArrowLeft={substractMonth => substractMonth()}
        // Handler which gets executed when press arrow icon left. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
      />
    </View>
  }
}
