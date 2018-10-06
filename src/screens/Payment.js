import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native'
import GoBack from '../components/GoBack'
import GradientButton from '../components/GradientButton'
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input'
import { EvilIcons } from '@expo/vector-icons'
import Hr from '../components/Hr'
const { height } = Dimensions.get('window')

const dummyData = {
  adults: 2,
  teens: 1,
  children: 2,
  infants: 0,
  price: '$100',
  total: '$1000',
  experienceName: 'Ecuador: Living Among Giants',
  date: 'September 25, 2019',
  time: '7:00 - 9:00',
  host: 'Juan Paredes'
}

export default class Payment extends Component {
  constructor () {
    super()
    this.state = {
      useSavedCard: false
    }
    this.fade = new Animated.Value(1)
    this.top = new Animated.Value(0)
    this.handleCreditCard = this.handleCreditCard.bind(this)
    this.handleCreditInput = this.handleCreditInput.bind(this)
    let flexStart = new Animated.Value(0)
    const start = flexStart.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
  }

  handleCreditCard () {
    console.log('used old card')
  }
  handleCreditInput () {
    this.setState({useSavedCard: true})
    Animated.parallel([
      Animated.timing(this.fade, {
        toValue: 0,
        duration: 300
      }),
      Animated.timing(this.top, {
        toValue: -60,
        duration: 300
      })

    ]).start()
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1, backgroundColor: 'white', padding: 25
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <GoBack color={'black'} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              borderBottomColor: 'rgba(237, 237, 237, 1)',
              borderBottomWidth: 1
            }}>
            <Text style={{ fontSize: 30, fontFamily: 'SF-UI-Text-Bold', paddingVertical: 10 }}>Payment Details</Text>
            <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
              <View>
                <Text style={{ fontSize: 20, fontFamily: 'SF-UI-Text-Semibold', paddingBottom: 5 }}>Summary</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Medium', fontSize: 15, paddingBottom: 5 }}>{dummyData.experienceName}</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Medium', fontSize: 15, paddingBottom: 5 }}>By {dummyData.host}</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}>{dummyData.date}</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Light' }}>{dummyData.time}</Text>
              </View>
            </View>
          </View>
          <View style={{
            flexDirection: 'row', justifyContent: 'center', paddingVertical: 20
          }}>
            <View style={{
              flex: 1,
              borderRightWidth: 1,
              borderRightColor: 'rgba(237, 237, 237, 1)'
            }}>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.adults}</Text> {dummyData.adults > 1 ? ' x Adults' : ' x Adult'} </Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.teens}</Text>{dummyData.teens > 1 ? ' x Teens' : ' x Teen'}</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.children}</Text>{dummyData.children > 1 ? ' x Children' : ' x Child'}</Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 10, justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.price}</Text> Per Person </Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.total}</Text> Total</Text>
            </View>
          </View>
          {/***************************************************************/}
          <Animated.View style={{ borderTopColor: 'rgba(237, 237, 237, 1)', borderTopWidth: 1, justifyContent: 'center', paddingVertical: 20, opacity: this.fade }}>
            <TouchableOpacity onPress={() => this.handleCreditCard()} style={{ flexDirection: 'row', alignItems: 'center' }}>
              <EvilIcons style={{ paddingRight: 5 }} name='credit-card' size={32} color='gray' />
              <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 15 }}>Use Visa Credit Card Ending in 1234</Text>
            </TouchableOpacity>
          </Animated.View>
          <Animated.View style={{ opacity: this.fade }} >
            <Hr text='OR' />
          </Animated.View>
          <Animated.View style={{ flex: 1, justifyContent: this.state.useSavedCard ? 'flex-start' : 'center', top: this.top }}>
            <LiteCreditCardInput requiresName onFocus={() => this.handleCreditInput()} />
          </Animated.View>
        </View>
        <TouchableOpacity onPress={() => console.log('Success!')} disabled={!this.state.useSavedCard}>
          <GradientButton text='CONFIRM' round />
        </TouchableOpacity>
      </View>)
  }
}

// <TouchableOpacity>
//   <Text style={{ fontFamily: 'SF-UI-Text-Bold', fontSize: 12, paddingTop: 10, color: 'rgba(254, 207, 74, 1)' }} >See Details</Text>
// </TouchableOpacity>
