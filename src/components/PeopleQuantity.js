import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'

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
    let { adults, teens, infants, children, addOrSubtractPeople } = this.props

    return (<View style={{ flex: 1, overflow: 'hidden', width: '100%', padding: 20, backgroundColor: 'white' }}>
      <View style={{ justifyContent: 'space-evenly', flex: 1 }}>
        {/************************************************************/}
        <View style={{ paddingVertical: 20, justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center', alignItems: 'center', borderBottomColor: 'rgba(224, 224, 225, 1)', borderBottomWidth: 1 }}>
          <View>
            <Text style={{
              fontSize: 17,
              color: 'rgba(36, 37, 61, 1)'
            }}>
              Adult
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
              16+ Years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => addOrSubtractPeople('subtract', 'adults')}>
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)',
              fontSize: 24,
              textAlign: 'center',
              width: 70
            }}
            >
              {adults}
            </Text>
            <TouchableOpacity onPress={() => addOrSubtractPeople('add', 'adults')}>
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
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
              Teen
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
              13 - 15 years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => addOrSubtractPeople('subtract', 'teens')}>
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)',
              fontSize: 24,
              textAlign: 'center',
              width: 70
            }}
            >
              {teens}

            </Text>
            <TouchableOpacity onPress={() => addOrSubtractPeople('add', 'teens')}>
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
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
              2 - 12 years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => addOrSubtractPeople('subtract', 'children')} >
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)',
              fontSize: 24,
              textAlign: 'center',
              width: 70
            }}
            >
              {children}

            </Text>
            <TouchableOpacity onPress={() => addOrSubtractPeople('add', 'children')} >
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
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
              Infant
            </Text>
            <Text style={{
              fontSize: 12,
              color: 'rgba(36, 37, 61, 0.5)'
            }}>
              Under 2 years
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => addOrSubtractPeople('subtract', 'infants')}>
              <Entypo name='circle-with-minus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
            <Text style={{
              color: 'rgba(36, 37, 61, 1)',
              fontSize: 24,
              textAlign: 'center',
              width: 70
            }}
            >
              {infants}

            </Text>
            <TouchableOpacity onPress={() => addOrSubtractPeople('add', 'infants')}>
              <Entypo name='circle-with-plus' size={30} color={'rgba(216, 216, 216, 1)'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
    )
  }
}
