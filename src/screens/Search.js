import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity
} from 'react-native'
import InlineIcon from '../components/InlineIcon'
import ActivityCard from '../components/ActivityCard'
import Location from '../components/Location'
import CalendarStrip from 'react-native-calendar-strip'
import GradientButton from '../components/GradientButton'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import LinearGradientBorder from '../components/LinearGradientBorder'
import styles from '../styles/search/'
import defaultStyles from '../styles/styles'
import experiences from '../experiences'
let { width } = Dimensions.get('window')

export default class Search extends Component {
  state = {
    location: '',
    activityType: '',
    selectedActivityIndex: -1,
    date: '',
    priceRangeMin: '0',
    priceRangeMax: '0',
    activities: ['Tour', 'Biking', 'Kayak', 'Eating', 'Milking'] // will be moved to props not state
  }

  changeActivity (selectedActivityIndex) {
    if (selectedActivityIndex == this.state.selectedActivityIndex) {
      selectedActivityIndex = -1
    }
      this.setState({selectedActivityIndex})
  }

   doSearch = () => {
    let searchDisplay = this.state.location
    if (this.state.selectedActivityIndex != -1) {
      searchDisplay = `${searchDisplay} - ${this.state.activities[this.state.selectedActivityIndex]}`
    }

    this.props.navigation.navigate('Landing', {
      search: searchDisplay
    })
  }

  render() {
    let { selectedActivityIndex, activities } = this.state
    let x = this.state.priceRangeMin
    let y = this.state.priceRangeMax
    let locations = experiences
      .filter(x => {
        return (
          x.location
            .toLowerCase()
            .includes(this.state.location.toLowerCase()) ||
          x.activityType
            .toLowerCase()
            .includes(this.state.location.toLowerCase())
        )
      })
      .slice(0, 4)


    return (
      <View style={styles.parent}>
        {/* SEARCH */}
        <View style={styles.firstChild}>
          <Image
            resizeMode='contain'
            style={styles.searchImage}
            source={require('../assets/img/Search.png')}
          />
          <TextInput
            autoFocus
            onChangeText={value => this.setState({ location: value })}
            placeholder='Search by City or Activity'
            style={styles.input}
            value={this.state.location}
          />
        </View>
        {/* LOCATIONS */}
        <View style={styles.divider}>
          <InlineIcon
            IconTag='EvilIcons'
            iconName='location'
            label='Location'
          />
          {locations.length > 0 ? (
            locations.map((x, y) => {
              return (
                <TouchableOpacity
                  key={x + y}
                  onPress={() => this.setState({ location: x.location })}>
                  <Location location={x.location} />
                </TouchableOpacity>
              )
            })
          ) : (
            <Text style={defaultStyles.informativeText}>
              No Locations or Activities Found.
            </Text>
          )}
        </View>
        {/* Activities */}
        <View style={styles.divider}>
          <InlineIcon
            IconTag='FontAwesome'
            iconName='bolt'
            label='Activities'
          />
          <ScrollView
            horizontal
            contentContainerStyle={{
              flexDirection: 'row'
            }}>
            {activities.length > 0 ? (
              activities.map(
                (activity, index) =>
                  index === selectedActivityIndex ? (
                    <LinearGradientBorder key={index}>
                      <TouchableOpacity
                        onPress={() => this.changeActivity(index)}
                      >
                        <ActivityCard
                          IconTag='Ionicons'
                          iconName='ios-hammer-outline'
                          label={activity}
                        />
                      </TouchableOpacity>
                    </LinearGradientBorder>
                  ) : (
                    <TouchableOpacity
                      key={index}
                      onPress={() => this.changeActivity(index)}
                    >
                      <ActivityCard
                        IconTag='Ionicons'
                        iconName='ios-hammer-outline'
                        label={activity}
                      />
                    </TouchableOpacity>
                  )
              )
            ) : (
              <Text style={defaultStyles.informativeText}>
                No Locations or Activities Found.
              </Text>
            )}
          </ScrollView>
        </View>
        <View>
          <InlineIcon
            IconTag='FontAwesome'
            iconName='money'
            label={`Price Range: $${x} - $${y}`}
          />

          <MultiSlider
            onValuesChange={values => {
              this.setState({
                priceRangeMax: values[1],
                priceRangeMin: values[0]
              })
            }}
            values={[0, 150]}
            sliderLength={width - 60}
            min={0}
            max={1000}
            step={1}
            allowOverlap
            snapped
            markerOffsetX={0}
            markerStyle={{
              height: 12,
              width: 12,
              borderColor: 'rgba(83, 160, 253, 1)',
              borderWidth: 2,
              backgroundColor: 'rgba(48, 35, 174, 1)',
              shadowOffset: {
                width: 0,
                height: 0
              },
              shadowRadius: 2,
              shadowOpacity: 10
            }}
            trackStyle={{
              height: 3,
              backgroundColor: 'rgba(83, 160, 253, 1)'
            }}
          />
        </View>
        <View style={styles.divider}>
          <InlineIcon IconTag='EvilIcons' iconName='clock' label='Dates' />
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

        <View style={styles.divider}>
          <TouchableOpacity
            onPress={this.doSearch}
          >
            <GradientButton text="SHOW RESULTS" />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
