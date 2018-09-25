import React, { Component } from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import { MaterialIcons, Feather, Entypo } from '@expo/vector-icons'

export default class PeopleQuantity extends Component {
  constructor () {
    super()
    this.state = {
      adults: 0,
      teens: 0,
      children: 0,
      infants: 0
    }
  }

  render () {
    return (<View style={{flex: 1, borderRadius: 20, overflow: 'hidden', backgroundColor: 'white', width: '100%', padding: 20}}>
      <View style={{
        flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10, borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1}}>
        <TouchableOpacity>
          <MaterialIcons name='close' size={30} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name='arrow-right' size={30} />
        </TouchableOpacity>
      </View>
      <View style={{justifyContent: 'space-evenly', flex: 1}}>
        {/************************************************************/}

        <View style={{paddingVertical: 20, justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center', borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1}}>
          <View>
            <Text style={{
              fontSize: 17,
              color: 'rgba(36, 37, 61, 1)'}}>
               Adults
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
            16+ Years
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => this.setState({ adults: this.state.adults + 1 })}>
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)', fontSize: 24, paddingHorizontal: 20}}>{this.state.adults}</Text>
            <TouchableOpacity onPress={() => this.state.adults !== 0 ? this.setState({adults: this.state.adults - 1}) : 0}>
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
          </View>
        </View>

        {/************************************************************/}

        <View style={{ paddingVertical: 20, justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center', borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1 }}>
          <View>
            <Text style={{
              fontSize: 17,
              color: 'rgba(36, 37, 61, 1)'
            }}>
                    Teens
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
                    15 - 16 years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => this.setState({teens: this.state.teens + 1})}>
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)', fontSize: 24, paddingHorizontal: 20
            }}>{this.state.teens}</Text>
            <TouchableOpacity onPress={() => this.state.teens !== 0 ? this.setState({ teens: this.state.teens - 1 }) : 0} >
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
          </View>
        </View>

        {/************************************************************/}

        <View style={{ paddingVertical: 20, justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center', borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1 }}>
          <View>
            <Text style={{
              fontSize: 17,
              color: 'rgba(36, 37, 61, 1)'
            }}>
                    Children
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
                    2 - 11 years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => this.setState({ children: this.state.children + 1 })} >
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)', fontSize: 24, paddingHorizontal: 20
            }}>{this.state.children}</Text>
            <TouchableOpacity onPress={() => this.state.children !== 0 ? this.setState({ children: this.state.children - 1 }) : 0} >
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
          </View>
        </View>

        {/************************************************************/}

        <View style={{ paddingVertical: 20, justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
          <View>
            <Text style={{
              fontSize: 17,
              color: 'rgba(36, 37, 61, 1)'
            }}>
                    Infants
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
                    Under 2 years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => this.setState({ infants: this.state.infants + 1 })}>
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)', fontSize: 24, paddingHorizontal: 20
            }}>{this.state.infants}</Text>
            <TouchableOpacity onPress={() => this.state.infants !== 0 ? this.setState({infants: this.state.infants - 1}) : 0}>
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    )
  }
}
