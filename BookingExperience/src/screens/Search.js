import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  Text
} from 'react-native';
import InlineIcon from '../components/InlineIcon';
import ActivityCard from '../components/ActivityCard';
import Location from '../components/Location';
import CalendarStrip from 'react-native-calendar-strip';
import GradientButton from '../components/GradientButton';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import LinearGradientBorder from '../components/LinearGradientBorder';
import styles from '../styles/search/';
import defaultStyles from '../styles/styles';
const data = [
  {
    location: 'New York, New York',
    activity: 'tiger',
    date: 'July 29, 2018',
    price: 100
  },
  {
    location: 'Queens, New York',
    activity: 'Art',
    date: 'July 29, 2018',
    price: 100
  },
  {
    location: 'Bronx, New York',
    activity: 'Dog',
    date: 'July 29, 2018',
    price: 100
  },
  {
    location: 'Los Angeles, California',
    activity: 'cat',
    date: 'July 29, 2018',
    price: 100
  },
  {
    location: 'Long Island, New York',
    activity: 'bird',
    date: 'July 29, 2018',
    price: 100
  },
  {
    location: 'Austin, Texas',
    activity: 'Art',
    date: 'July 29, 2018',
    price: 100
  }
];

let { width } = Dimensions.get('window');

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      location: 'New York',
      activity: '',
      date: '',
      priceRange: ''
    };
  }

  render() {
    let locations = data
      .filter(x => {
        return (
          x.location
            .toLowerCase()
            .includes(this.state.location.toLowerCase()) ||
          x.activity.toLowerCase().includes(this.state.location.toLowerCase())
        );
      })
      .slice(0, 4);
    return (
      <View style={styles.parent}>
        {/*SEARCH*/}

        <View style={styles.firstChild}>
          <Image
            resizeMode="contain"
            style={styles.searchImage}
            source={require('../assets/img/Search.png')}
          />
          <TextInput
            onChangeText={value => this.setState({ location: value })}
            placeholder="Search by City or Activity"
            style={styles.input}
            value={this.state.location}
          />
        </View>
        {/*LOCATIONS*/}
        <View style={styles.divider}>
          <InlineIcon
            IconTag="EvilIcons"
            iconName="location"
            label="Location"
          />
          {locations.length > 0 ? (
            locations.map((x, y) => {
              return <Location key={x + y} location={x.location} />;
            })
          ) : (
            <Text style={defaultStyles.informativeText}>
              No Locations or Activities Found.
            </Text>
          )}
        </View>
        {/*Activities*/}
        <View style={styles.divider}>
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
            {locations.length > 0 ? (
              locations.map(
                (x, y) =>
                  y === 0 ? (
                    <LinearGradientBorder key={x.location + y}>
                      <ActivityCard
                        IconTag="Ionicons"
                        iconName="ios-hammer-outline"
                        label={x.activity}
                      />
                    </LinearGradientBorder>
                  ) : (
                    <ActivityCard
                      key={x.location + y}
                      IconTag="Ionicons"
                      iconName="ios-hammer-outline"
                      label={x.activity}
                    />
                  )
              )
            ) : (
              <Text style={defaultStyles.informativeText}>
                No Locations or Activities Found.
              </Text>
            )}
          </ScrollView>
        </View>
        <View style={styles.divider}>
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
            innerStyle={styles.calenderStyle}
          />
        </View>

        <View>
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
        <View style={styles.divider}>
          <GradientButton text="SHOW RESULTS" />
        </View>
      </View>
    );
  }
}
