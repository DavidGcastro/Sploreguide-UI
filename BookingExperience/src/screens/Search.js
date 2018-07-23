import React, { Component } from 'react';
import { View, ScrollView, Image, TextInput, Dimensions } from 'react-native';
import InlineIcon from '../components/InlineIcon';
import ActivityCard from '../components/ActivityCard';
import Location from '../components/Location';
import CalendarStrip from 'react-native-calendar-strip';
import GradientButton from '../components/GradientButton';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
let { width } = Dimensions.get('window');

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      activity: '',
      date: '',
      priceRange: ''
    };
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 20,
          backgroundColor: 'rgba(246, 247, 249, 1)',
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'space-evenly'
        }}>
        {/*SEARCH*/}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            width: '90%',
            paddingBottom: 10
          }}>
          <Image
            resizeMode="contain"
            style={{ width: 25, height: 30 }}
            source={require('../assets/img/Search.png')}
          />
          <TextInput
            placeholder="Search by City or Activity"
            style={{
              paddingLeft: 10,
              fontSize: 26,
              fontWeight: 'bold',
              color: 'rgba(48, 55, 64, 1)',

              width: '100%'
            }}
          />
        </View>
        {/*LOCATIONS*/}
        <View
          style={{
            width: '90%',
            paddingBottom: 10
          }}>
          <InlineIcon
            IconTag="EvilIcons"
            iconName="location"
            label="Location"
          />
          <Location location="New York, New York" />
          <Location location="Los Angeles, California" />
          <Location location="New Orleans, Louisiana" />
          <Location location="Brooklyn, New York" />
        </View>
        {/*Activities*/}
        <View
          style={{
            width: '90%',
            paddingBottom: 10
          }}>
          <InlineIcon
            IconTag="FontAwesome"
            iconName="bolt"
            label="Activities"
          />
          <ScrollView
            horizontal={true}
            contentContainerStyle={{
              flexDirection: 'row'
            }}>
            <ActivityCard
              IconTag="Ionicons"
              iconName="ios-hammer-outline"
              label="Workshops"
            />
            <ActivityCard
              IconTag="Ionicons"
              iconName="ios-color-palette-outline"
              label="Arts"
            />

            <ActivityCard
              IconTag="MaterialCommunityIcons"
              iconName="swim"
              label="Surfing"
            />
            <ActivityCard
              IconTag="Ionicons"
              iconName="ios-color-palette-outline"
              label="Arts"
            />
            <ActivityCard
              IconTag="Ionicons"
              iconName="ios-color-palette-outline"
              label="Arts"
            />
          </ScrollView>
        </View>
        <View style={{ paddingBottom: 10 }}>
          <InlineIcon IconTag="EvilIcons" iconName="clock" label="Dates" />
          <CalendarStrip
            dateNameStyle={{
              color: 'rgba(132, 146, 166, 0.5)',
              fontWeight: '500'
            }}
            dateNumberStyle={{
              color: 'rgba(132, 146, 166, 1)',
              fontWeight: '500'
            }}
            calendarHeaderStyle={{
              color: 'rgba(132, 146, 166, 1)',
              letterSpacing: 2,
              fontSize: 13
            }}
            highlightDateNameStyle={{ color: 'rgba(48, 35, 174, 1)' }}
            highlightDateNumberStyle={{ color: 'rgba(48, 35, 174, 1)' }}
            styleWeekend={false}
            innerStyle={{
              width: width - 30,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'white',
              backgroundColor: 'white'
            }}
          />
        </View>

        <View style={{}}>
          <InlineIcon
            IconTag="FontAwesome"
            iconName="money"
            label="Price Range"
          />

          <MultiSlider
            values={[0, 100]}
            selectedStyle={{
              backgroundColor: 'rgba(48, 35, 174, 1)'
            }}
            sliderLength={width - 60}
            min={0}
            max={10}
            step={1}
            allowOverlap
            snapped
            trackStyle={{
              height: 3,
              backgroundColor: 'rgba(83, 160, 253, 1)'
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            width: '90%'
          }}>
          <GradientButton text="SHOW RESULTS" />
        </View>
      </View>
    );
  }
}
