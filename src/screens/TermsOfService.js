import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import GoBack from '../components/GoBack'
import TermSection from '../components/TermSection'
import GradientButton from '../components/GradientButton'

const TermsOfService = props => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{
        flex: 1, backgroundColor: 'white', padding: 25
      }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <GoBack color={'black'} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1
          }}>
          <Text style={{ fontSize: 25, fontFamily: 'SF-UI-Text-Bold', paddingVertical: 10 }}>Review The Guest Requirements</Text>
          <ScrollView>
            <TermSection border heading='From Your Host' content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.' />
            <TermSection border heading='Alchohol' content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.' />
            <TermSection border heading='Legal' content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' />            <TermSection heading='Age Requirements' content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' />
            <TermSection border heading='Insurance' content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' />
            <TermSection heading='SploreGuide Guarrantee' content='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' />
          </ScrollView>
        </View>
        <View style={{ flex: 0.075, justifyContent: 'center', paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: 'SF-UI-Text-Light' }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>$30.29</Text>  Per Person</Text>
            <Text style={{ fontFamily: 'SF-UI-Text-Light' }}><Text style={{ fontSize: 15, fontFamily: 'SF-UI-Text-Bold' }}>$1001.00</Text>  Total</Text>
          </View>

        </View>
      </View>

      <TouchableOpacity onPress={() => props.navigation.navigate('Payment')}>
        <GradientButton text='ACCEPT' round />
      </TouchableOpacity>
    </View>

  )
}

// <TouchableOpacity>
//   <Text style={{ fontFamily: 'SF-UI-Text-Bold', fontSize: 12, paddingTop: 10, color: 'rgba(254, 207, 74, 1)' }} >See Details</Text>
// </TouchableOpacity>
export default TermsOfService
