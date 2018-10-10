import React, { Component } from 'react'
import { ScrollView, View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import CalendarScreen from '../components/CalenderScreen'
import PeopleQuantity from '../components/PeopleQuantity'

export default class Checkout extends Component {
  state = {
    showing: 'calendar',
    dateSelected: '',
    timeSelected: '',
    title: '',
    image: '',
    adults: 0,
    teens: 0,
    children: 0,
    infants: 0
  }

  changeShowing = (show) => {
    this.setState({ showing: show })
  }

  addOrSubtractPeople = (operation, age) => {

    if (operation === 'add') {
      if (age == 'adults') {
        this.setState({ adults: this.state.adults + 1 })
      }
      if (age === 'teens') {
        this.setState({ teens: this.state.teens + 1 })


      } if (age === 'children') {
        this.setState({ children: this.state.children + 1 })


      } if (age === 'infants') {
        this.setState({ infants: this.state.infants + 1 })

      }
    }
    if (operation === 'subtract') {
      if (age === 'adults') {
        this.state.adults !== 0 ? this.setState({ adults: this.state.adults - 1 }) : 0
      }
      if (age === 'teens') {
        this.state.teens !== 0 ? this.setState({ teens: this.state.teens - 1 }) : 0

      } if (age === 'children') {
        this.state.children !== 0 ? this.setState({ children: this.state.children - 1 }) : 0

      } if (age === 'infants') {
        this.state.infants !== 0 ? this.setState({ infants: this.state.infants - 1 }) : 0

      }
    }
  }


  changeTimeSelected = (itemSelected) => {
  
    //this.setState({ dateSelected: itemSelected.date, timeSelected: itemSelected.time })
    this.setState({
      dateSelected: moment(itemSelected.data).format('MMMM DD' ), timeSelected: itemSelected.time
    })

  }

  componentDidMount () {
    this.setState({ title: this.props.title, image: this.props.image })
  }


  render () {
    let { showing } = this.state
    let { showCheckout, nav, title, image } = this.props
    let backWrapper, nextWrapper
    if (showing === 'calendar') {
      backWrapper = () => showCheckout(false)
      nextWrapper = () => this.changeShowing('quantity')
    } else if (showing === 'quantity') {
      backWrapper = () => this.changeShowing('calendar')
      nextWrapper = () => nav.navigate('TermsOfService', {
        image: this.state.image,
        title: this.state.title,
        guests: [{ adults: this.state.adults, price: 100 }, { teens: this.state.teens, price: 100 }, { children: this.state.children, price: 80 }, { infants: this.state.infants, price: 50 }],
        dateSelected: this.state.dateSelected,
        timeSelected: this.state.timeSelected
      })
    }

    return (
      <View style={{ flex: 1 }} contentContainerStyle={{ justifyContent: 'center', flex: 1 }} >
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1
        }}>
          <TouchableOpacity onPress={() => backWrapper()}>
            {(showing === 'calendar') ?
              <MaterialIcons name='close' size={30} />
              :
              <Feather name='arrow-left' size={30} />
            }
          </TouchableOpacity>
          <Text style={{ paddingTop: 8, fontSize: 16, fontFamily: 'SF-UI-Text-Light' }}>
            {this.state.dateSelected && `${this.state.dateSelected}  | ${this.state.timeSelected  || ''}`}
          </Text>
          {(this.state.timeSelected != '')
      
            ? <TouchableOpacity onPress={() => nextWrapper()}>
              <Feather name='arrow-right' size={30} />
            </TouchableOpacity>
            : <Feather name='arrow-right' size={30} color={'#b2b2b2'} />
          }
     
        </View>
        {showing === 'calendar'
          ? <CalendarScreen
            dateSelected={this.state.dateSelected}
            changeTimeSelected={this.changeTimeSelected} />
          : <PeopleQuantity title={title}
            adults={this.state.adults}
            teens={this.state.teens}
            infants={this.state.infants}
            children={this.state.children}
            addOrSubtractPeople={this.addOrSubtractPeople}
            dateSelected={this.state.dateSelected}
            timeSelected={this.state.timeSelected} x
          />
        }
      </View>
    )
  }
}
