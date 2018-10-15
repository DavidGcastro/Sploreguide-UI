import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import GoBack from '../components/GoBack'
import GradientButton from '../components/GradientButton'
import PaymentModal from '../screens/PaymentModal'
import styles from '../styles/payment'
import { EvilIcons, Feather, FontAwesome } from '@expo/vector-icons'

export default class Payment extends Component {
  constructor() {
    super()
    this.state = {
      useSavedCard: false,
      modalVisible: false
    }
    this.handleCreditCard = this.handleCreditCard.bind(this)
    this.handleCreditInput = this.handleCreditInput.bind(this)
  }

  handleCreditCard () {

  }
  handleCreditInput () {

  }

  getTotal = x => x.guests.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price * currentValue[Object.keys(currentValue)[0]]
  }, x.guests[0].price * x.guests[0][Object.keys(x.guests[0])[0]])

  confirmPayment = () => {
    this.setState({ modalVisible: true })
  }

  hideModal = () => {
    this.setState({ modalVisible: false })
    this.props.navigation.navigate('Landing')
  }

  render () {
    let data = (this.props.navigation.state.params)
    let total = this.getTotal(data) + 150.01 + 50.01

    return (
      <View style={{ flex: 1 }}>
        <View style={{
          flex: 1, backgroundColor: 'white', padding: 25
        }}>
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <GoBack color={'black'} />
          </TouchableOpacity>
          <PaymentModal visible={this.state.modalVisible} data={data} hideModal={this.hideModal} total={total} />
          <View style={styles.flexedBordered}>
            <Text style={styles.largeTextPadded}>Payment Details</Text>
            <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 10, flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.smallTextPadded}>{data.title}</Text>
                <Text style={[styles.smallText, { paddingBottom: 5 }]}>{data.dateSelected}</Text>
                <Text style={styles.smallTextLight}>{data.timeSelected}</Text>
              </View>
              <Image style={{ width: 70, height: 70, borderRadius: 10 }} source={{ uri: data.image }} />
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
              {data.guests.map((detail, i) => {
               if (detail[Object.keys(detail)[0]] > 0){
                return  <Text key={i} style={styles.textLight}>
                    <Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>{detail[Object.keys(detail)[0]]}</Text>
                    {' x ' + Object.keys(detail)[0].slice(0, 1).toUpperCase() + Object.keys(detail)[0].slice(1)}
                  </Text>
                }
                else{
                 return ''
                }
              })}
            </View>
            <View style={{
              borderRightWidth: 1,
              borderRightColor: 'rgba(237, 237, 237, 1)'
            }} />
            <View style={{ paddingLeft: 10 }}>
              {data.guests.map((detail, i) => {
                if (detail[Object.keys(detail)[0]] > 0 ){
                  return <Text key={i} style={styles.textLight}>
                    <Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>$ </Text>
                    {detail[Object.keys(detail)[1]] * detail[Object.keys(detail)[0]]}
                  </Text>

                }
                else{
                  return ''
                }

              })}
              <Text style={[styles.textLight, { fontSize: 10 }]}>
                <Text style={{ fontSize: 12, fontFamily: 'SF-UI-Text-Bold' }}>+ </Text>
                150.01 Tax
              </Text>
              <Text style={[styles.textLight, { fontSize: 10 }]}>
                <Text style={{ fontSize: 12, fontFamily: 'SF-UI-Text-Bold' }}>+ </Text>
                50.01 Security Deposit
              </Text>

            </View>
          </View>
          {/***************************************************************/}

          <View style={styles.totalParent}>
            <Text style={styles.textLight}>Total (USD)</Text>
            <Text style={{ color: 'black', fontFamily: 'SF-UI-Text-Medium', fontSize: 15 }}>${this.getTotal(data) + 150.01 + 50.01}</Text>
          </View>
          {/***************************************************************/}

          <View style={{ justifyContent: 'center' }}>
            <Text style={{ color: 'gray', fontFamily: 'SF-UI-Text-Light', fontSize: 12 }}>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. <Text style={{ fontFamily: 'SF-UI-Text-Light', color: 'rgba(254, 207, 74, 1)' }}>Vivamus magna justo, lacinia eget consectetur sed</Text> convallis at tellus. Cras ultricies ligula sed magna dictum porta.</Text>
          </View>
          {/***************************************************************/}

        </View>
        <TouchableOpacity onPress={() => this.confirmPayment()}>
          <GradientButton text={`CONFIRM - $${this.getTotal(data) + 150.01 + 50.01}`} round />
        </TouchableOpacity>
      </View>)
  }
}
