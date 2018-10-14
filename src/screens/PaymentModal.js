import React, { Component } from 'react'
import Modal from 'react-native-modal'
import {LinearGradient} from 'expo'
import { Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
let { height } = Dimensions.get('window')

export default class PaymentModal extends Component {
  constructor (props) {
    super()
  }
  render () {
    let {dateSelected, title, timeSelected} = this.props.data
    let {total} = this.props

    return (

      <Modal isVisible={this.props.visible} onBackdropPress={() => this.props.hideModal()}
        style={{ alignItems: 'center', justifyContent: 'space-around' }}
        onSwipe={() => this.props.hideModal()}
        swipeDirection='up' >
        <View style={{ height: height / 1.4, backgroundColor: 'white', borderRadius: 10, padding: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Image source={require('../assets/img/explore.gif')} style={{height: 100, width: 100, borderRadius: 50, zIndex: 100}} />
          <View style={{ justifyContent: 'space-around', flex: 1, alignItems: 'center', padding: 15 }}>
            <View>
              <Text style={{ fontFamily: 'SF-UI-Text-Bold', fontSize: 25, textAlignVertical: 'center', textAlign: 'center' }}>Thank You!</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Light', fontSize: 15, textAlignVertical: 'center', textAlign: 'center', letterSpacing: 1 }}>Your Journey Awaits.</Text>
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 15, color: 'gray', paddingBottom: 5 }}>Confirmation Number</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 12, color: 'black' }}>3423423423423</Text>
            </View>
            {/********************************************************************/}
            <View style={{ alignSelf: 'flex-start', justifyContent: 'space-between', flexDirection: 'row', width: 300 }}>
              <View>
                <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 15, color: 'gray', paddingBottom: 5 }}>DATE</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Bold', fontSize: 15, color: 'black' }}>{dateSelected}</Text>
              </View>
              <View >
                <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 15, color: 'gray', paddingBottom: 5 }}>TIME</Text>
                <Text style={{ fontFamily: 'SF-UI-Text-Bold', fontSize: 15, color: 'black' }}>{timeSelected}</Text>
              </View>
            </View>
            <View style={{ alignSelf: 'flex-start' }}>
              <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 15, color: 'gray', paddingBottom: 5 }}>EXPERIENCE</Text>
              <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 15, color: 'black' }}>{title}</Text>
            </View>
            <Text style={{ color: 'grey', alignSelf: 'flex-start', fontSize: 15, fontFamily: 'SF-UI-Text-Regular' }}>Visa Credit Card Ending in 1234</Text>
            <View style={{ alignSelf: 'flex-start', justifyContent: 'space-between' }}>
              <Text style={{ fontFamily: 'SF-UI-Text-Regular', fontSize: 15, color: 'gray', paddingBottom: 5 }}>TOTAL</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: 300, alignItems: 'center' }}>
                <Text style={{ fontFamily: 'SF-UI-Text-Bold', fontSize: 15, color: 'black' }}>${total}</Text>
                <LinearGradient
                  style={{ justifyContent: 'center', padding: 5, borderRadius: 3 }}
                  colors={['rgba(48, 35, 174, 1)', 'rgba(83, 160, 253, 1)']}
                  start={[0, 0.5]}
                  end={[0.5, 1]}>
                  <Text style={{ color: 'white' }}>Completed</Text>
                </LinearGradient>
              </View>
            </View>
            {/********************************************************************/}
          </View>
        </View>
        <TouchableOpacity style={{ top: 10, alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 50, width: 50, height: 50, justifyContent: 'center', backgroundColor: 'white', opacity: 0.5 }}
          onPress={this.props.hideModal}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </Modal>

    )
  }
}
