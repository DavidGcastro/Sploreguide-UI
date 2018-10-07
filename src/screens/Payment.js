import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Animated, Dimensions } from 'react-native'
import GoBack from '../components/GoBack'
import GradientButton from '../components/GradientButton'
import { CreditCardInput, LiteCreditCardInput } from 'react-native-credit-card-input'
import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons'
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
  }

  handleCreditCard () {
    console.log('used old card')
  }
  handleCreditInput () {

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
              borderBottomColor: 'rgba(237, 237, 237, 1)',
              borderBottomWidth: 1

            }}>
            <Text style={{ fontSize: 25, fontFamily: 'SF-UI-Text-Bold', paddingVertical: 5 }}>Payment Details</Text>
            <View style={{ flex: 1, justifyContent: 'space-evenly', paddingBottom: 10 }}>
              <View>
                <Text style={{ fontFamily: 'SF-UI-Text-Medium', fontSize: 15, paddingBottom: 5 }}>{dummyData.experienceName}</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Medium', fontSize: 15, paddingBottom: 5 }}>By {dummyData.host}</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}>{dummyData.date}</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Light' }}>{dummyData.time}</Text>
              </View>
            </View>
          </View>

          {/***************************************************************/}

          <View style={{ justifyContent: 'center', paddingVertical: 20, borderBottomColor: 'rgba(237, 237, 237, 1)', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => this.handleCreditCard()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <EvilIcons style={{ paddingRight: 5 }} name='credit-card' size={25} color='gray' />
              <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 15 }}>Use Visa Credit Card Ending in 1234</Text>
              <Feather
                name='arrow-right'
                size={25}
                color='gray'
              />
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', paddingVertical: 20, borderBottomColor: 'rgba(237, 237, 237, 1)', borderBottomWidth: 1 }}>
            <TouchableOpacity onPress={() => this.handleCreditCard()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <FontAwesome style={{ paddingRight: 5 }} name='cc-paypal' size={25} color='gray' />
              <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 15 }}>Pay Using PayPal</Text>
              <Feather
                name='arrow-right'
                size={25}
                color='gray'
              />
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10
          }}>
            <View>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.adults}</Text> {dummyData.adults > 1 ? ' x Adults' : ' x Adult'} </Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.teens}</Text>{dummyData.teens > 1 ? ' x Teens' : ' x Teen'}</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{dummyData.children}</Text>{dummyData.children > 1 ? ' x Children' : ' x Child'}</Text>
            </View>
            <View style={{
              borderRightWidth: 1,
              borderRightColor: 'rgba(237, 237, 237, 1)'
            }} />
            <View style={{ paddingLeft: 10 }}>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }} />$200</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }} />{dummyData.price}</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', paddingBottom: 5 }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }} />$200</Text>
            </View>
          </View>
          <View style={{ borderTopColor: 'rgba(237, 237, 237, 1)', borderTopWidth: 1, justifyContent: 'space-between', paddingVertical: 20, flexDirection: 'row' }}>
            <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 15 }}>Total (USD)</Text>
            <Text style={{ color: 'black', fontFamily: 'SF-UI-Text-Medium', fontSize: 15 }}>{dummyData.total}</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 15 }}>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. <Text style={{ fontFamily: 'SF-UI-Text-Light', color: 'rgba(254, 207, 74, 1)' }}>Vivamus magna justo, lacinia eget consectetur sed</Text> convallis at tellus. Cras ultricies ligula sed magna dictum porta.</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => console.log('Success!')} disabled={!this.state.useSavedCard}>
          <GradientButton text={`CONFIRM - ${dummyData.total}`} round />
        </TouchableOpacity>
      </View>)
  }
}
