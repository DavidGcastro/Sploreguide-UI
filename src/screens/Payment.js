import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import GoBack from '../components/GoBack'
import GradientButton from '../components/GradientButton'
import styles from '../styles/payment'
import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons'

const dummyData = {
  guests: [
    { adult: 2, price: 100 },
    { teen: 1, price: 80 },
    { children: 2, price: 20 },
    { infant: 2, price: 10 }
  ],
  price: '$100',
  total: '$1000',
  experienceName: 'Ecuador: Living Among Giants',
  date: 'September 25, 2019',
  time: '7:00 - 9:00',
  host: 'Juan Paredes'
}

const getTotal = () => dummyData.guests.reduce((accumulator, currentValue) => {
  return accumulator + currentValue.price * currentValue[Object.keys(currentValue)[0]]
}, dummyData.guests[0].price * dummyData.guests[0][Object.keys(dummyData.guests[0])[0]])

console.log(getTotal())
export default class Payment extends Component {
  constructor () {
    super()
    this.state = {
      useSavedCard: false
    }
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
          <View style={styles.flexedBordered}>
            <Text style={styles.largeTextPadded}>Payment Details</Text>
            <View style={{ flex: 1, justifyContent: 'space-evenly', paddingBottom: 10 }}>
              <View>
                <Text style={styles.smallTextPadded}>{dummyData.experienceName}</Text>
                <Text style={styles.smallTextPadded}>By {dummyData.host}</Text>
                <Text style={[styles.smallText, {paddingBottom: 5}]}>{dummyData.date}</Text>
                <Text style={styles.smallTextLight}>{dummyData.time}</Text>
              </View>
            </View>
          </View>
          {/***************************************************************/}
          <View style={styles.paymentSection}>
            <TouchableOpacity onPress={() => this.handleCreditCard()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <EvilIcons style={{ paddingRight: 5 }} name='credit-card' size={25} color='gray' />
              <Text style={styles.paymentSectionText}>Pay With Debit or Credit Card</Text>
              <Feather
                name='arrow-right'
                size={25}
                color='gray'
              />
            </TouchableOpacity>
          </View>
          {/***************************************************************/}
          <View style={styles.paymentSection}>
            <TouchableOpacity onPress={() => this.handleCreditCard()} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <FontAwesome style={{ paddingRight: 5 }} name='cc-paypal' size={25} color='gray' />
              <Text style={styles.paymentSectionText}>Pay Using PayPal</Text>
              <Feather
                name='arrow-right'
                size={25}
                color='gray'
              />
            </TouchableOpacity>
          </View>
          {/***************************************************************/}
          <View style={styles.splitPaymentDetailParent}>
            <View>
              {dummyData.guests.map((detail, i) => {
                return <Text key={i} style={styles.textLight}>
                  <Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{detail[Object.keys(detail)[0]]}</Text>
                  {' x ' + Object.keys(detail)[0].slice(0, 1).toUpperCase() + Object.keys(detail)[0].slice(1)}
                </Text>
              })}
            </View>
            <View style={{
              borderRightWidth: 1,
              borderRightColor: 'rgba(237, 237, 237, 1)'
            }} />
            <View style={{ paddingLeft: 10 }}>
              {dummyData.guests.map((detail, i) => {
                return <Text key={i} style={styles.textLight}>
                  <Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>$ </Text>
                  {detail[Object.keys(detail)[1]] * detail[Object.keys(detail)[0]]}
                </Text>
              })}
            </View>
          </View>
          {/***************************************************************/}

          <View style={styles.totalParent}>
            <Text style={styles.textLight}>Total (USD)</Text>
            <Text style={{ color: 'black', fontFamily: 'SF-UI-Text-Medium', fontSize: 15 }}>${getTotal()}</Text>
          </View>
          {/***************************************************************/}

          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 15 }}>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. <Text style={{ fontFamily: 'SF-UI-Text-Light', color: 'rgba(254, 207, 74, 1)' }}>Vivamus magna justo, lacinia eget consectetur sed</Text> convallis at tellus. Cras ultricies ligula sed magna dictum porta.</Text>
          </View>
          {/***************************************************************/}

        </View>
        <TouchableOpacity onPress={() => console.log('Success!')} disabled={!this.state.useSavedCard}>
          <GradientButton text={`CONFIRM - $${getTotal()}`} round />
        </TouchableOpacity>
      </View>)
  }
}
