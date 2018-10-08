import React, { Component } from 'react'
import {ScrollView, View, Text,TouchableOpacity, AsyncStorage} from 'react-native'
import moment from 'moment'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import CalendarScreen from '../components/CalenderScreen'
import PeopleQuantity from '../components/PeopleQuantity'

export default class Checkout extends Component {
  state = {
      showing: 'calendar',
      dateSelected: '',
      timeSelected: ''
  }

  changeShowing = (show) => {
    this.setState({showing: show})
  }

  changeTimeSelected = (itemSelected) => {
    this.setState({dateSelected: itemSelected.date, timeSelected: itemSelected.time})
  }

  render () {
    let { showing } = this.state
    let { showCheckout, nav } = this.props

    let backWrapper, nextWrapper
    if (showing === 'calendar') {
      backWrapper = () => showCheckout(false)
      nextWrapper = () => this.changeShowing('quantity')
    } else if (showing === 'quantity') {
      backWrapper = () => this.changeShowing('calendar')
      nextWrapper = () => nav.navigate('TermsOfService')
    }

    return (
      <View style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center', flex: 1 }} >
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1}}>
          <TouchableOpacity onPress={() => backWrapper()}>
            { (showing === 'calendar') ?
              <MaterialIcons name='close' size={30} />
              :
              <Feather name='arrow-left' size={30} />
            }
          </TouchableOpacity>
          <Text style={{ paddingTop: 8, fontSize: 16, fontFamily: 'SF-UI-Text-Light'}}>
            {this.state.dateSelected && `${moment(this.state.dateSelected).format('MMMM DD')}, ${this.state.timeSelected || ''}`}
          </Text>
          { (this.state.timeSelected != '')
            ?<TouchableOpacity onPress={() => nextWrapper()}>
              <Feather name='arrow-right' size={30} />
            </TouchableOpacity>
            : <Feather name='arrow-right' size={30} color={'#b2b2b2'} />
          }
        </View>
        { showing === 'calendar'
          ? <CalendarScreen
              dateSelected={this.state.dateSelected}
              changeTimeSelected={this.changeTimeSelected}/>
          : <PeopleQuantity />
        }
      </View>
    )
  }
}
