import React from 'react'
import {ScrollView, View, Text, Dimensions, Image} from 'react-native'
import ExperienceFullScreen from '../components/ExperienceFullScreen'
import experiences from '../experiences'
let {width, height} = Dimensions.get('window')

export default class Experience extends React.Component {
  render () {
    // const item = this.props.navigation.state.params.experience
    const item = experiences[0]
    const nav = this.props.navigation.goBack
    return (
      <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'white'}}>
        <View style={{height, justifyContent: 'space-around'}} >
          {/**********************************************/}
          <ExperienceFullScreen item={item} nav={nav} />
          {/**********************************************/}
          <ScrollView pagingEnabled bounces={false}>
            <View style={{
              margin: 20, justifyContent: 'space-between', flex: 1, borderColor: 'rgba(151, 151, 151, .3)', borderBottomWidth: 1, paddingBottom: 20}}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10}}>
                <Text style={{
                  fontSize: 14,
                  fontFamily: 'SF-UI-Text-Semibold',
                  color: 'rgba(36, 37, 61, 1)'}}>Meet Your Host, {item.host.name}</Text>
                <Image source={item.host.picture} style={{width: 50, height: 50, borderRadius: 25}} />
              </View>
              <Text style={{
                fontSize: 13,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(74, 74, 74, 1)',
                lineHeight: 17
              }}>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
                Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</Text>
            </View>
            <View style={{
              margin: 20, justifyContent: 'space-between', flex: 1, borderColor: 'rgba(151, 151, 151, .3)', borderBottomWidth: 1, paddingBottom: 20
            }}>
              <Text style={{
                fontSize: 14,
                paddingBottom: 20,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(36, 37, 61, 1)'
              }}>What To Expect</Text>
              <Text style={{
                fontSize: 13,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(74, 74, 74, 1)',
                lineHeight: 17
              }}>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                  Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Pellentesque in ipsum id orci porta dapibus.
                  Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                  Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Pellentesque in ipsum id orci porta dapibus.</Text>
            </View>
            <View style={{
              margin: 20, justifyContent: 'space-between', flex: 1, borderColor: 'rgba(151, 151, 151, .3)', borderBottomWidth: 1, paddingBottom: 20
            }}>
              <Text style={{
                fontSize: 14,
                paddingBottom: 20,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(36, 37, 61, 1)'
              }}>What's Included?</Text>
              <Text style={{
                fontSize: 13,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(74, 74, 74, 1)',
                lineHeight: 17
              }}>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                    Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur.
              </Text>
            </View>
            <View style={{
              margin: 20, justifyContent: 'space-between', flex: 1, borderColor: 'rgba(151, 151, 151, .3)', borderBottomWidth: 1, paddingBottom: 20
            }}>
              <Text style={{
                fontSize: 14,
                paddingBottom: 20,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(36, 37, 61, 1)'
              }}>Rendez-vous</Text>
              <Text style={{
                fontSize: 13,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(74, 74, 74, 1)',
                lineHeight: 17
              }}>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur.
              </Text>
            </View>
            <View style={{
              margin: 20, justifyContent: 'space-between', flex: 1, borderColor: 'rgba(151, 151, 151, .3)', borderBottomWidth: 1, paddingBottom: 20
            }}>
              <Text style={{
                fontSize: 14,
                paddingBottom: 20,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(36, 37, 61, 1)'
              }}>Be Aware</Text>
              <Text style={{
                fontSize: 13,
                fontFamily: 'SF-UI-Text-Semibold',
                color: 'rgba(74, 74, 74, 1)',
                lineHeight: 17
              }}>Donec rutrum congue leo eget malesuada. Vivamus suscipit tortor eget felis porttitor volutpat.
                      Donec sollicitudin molestie malesuada. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur.
              </Text>
            </View>

          </ScrollView>
          {/**********************************************/}
        </View>
      </View>

    )
  }
}
