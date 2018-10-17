import React, { Component } from 'react'
import {
  View,
  ScrollView,
  Image,
  TextInput,
  Dimensions,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'
//import GooglePlacesInput from '../components/GooglePlacesInput'
import lodash from 'lodash'
import InlineIcon from '../components/InlineIcon'
import ActivityCard from '../components/ActivityCard'
import Location from '../components/Location'
import CalendarStrip from 'react-native-calendar-strip'
import GradientButton from '../components/GradientButton'
import GoBack from '../components/GoBack'
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import LinearGradientBorder from '../components/LinearGradientBorder'
import styles from '../styles/search/'
import { formatLocationObject } from '../helpers/strings'
import defaultStyles from '../styles/styles'
import Locations from '../Locations'
import Activities from '../Activities'
import PriceSlider from '../components/PriceSlider'
let { width } = Dimensions.get('window')
import ActivityScrollView from '../components/ActivityScrollView'
import Price from '../components/Price';


export default class Search extends Component {
  state = {
    location: '',
    query: {},
    date: new Date(),
    selectedActivityIndex: -1,
    priceRangeMin: 0,
    priceRangeMax: 100
  }


  changeLocationText = (value) => {
    this.setState({ location: value })
    if (value === '') {
      let query = Object.assign(this.state.query)
      delete query.location
      this.setState({ query })
    }
  }

  handlePriceChange = values => {
    this.setState({
      priceRangeMax: values[1],
      priceRangeMin: values[0],
      query: { ...this.state.query, priceRangeMin: values[0], priceRangeMax: values[1] }
    })
  }


  changeActivity = (selectedActivityIndex, activity) => {
    if (selectedActivityIndex == this.state.selectedActivityIndex) {
      this.setState({ query: { ...this.state.query, activityType: '' }, selectedActivityIndex: -1 })

    }
    else {
      this.setState({ selectedActivityIndex, query: { ...this.state.query, activityType: activity } })

    }


  }
  doSearch = () => {
    let searchDisplay = this.state.location
    if (this.state.selectedActivityIndex != -1) {
      searchDisplay = `${searchDisplay} - ${Activities[this.state.selectedActivityIndex]}`
    }

    this.props.navigation.navigate('Landing', {
      query: this.state.query
    })
  }

  render () {
    console.log(this.state.query)
    let { query } = this.state
    let x = this.state.priceRangeMin
    let y = this.state.priceRangeMax
    let locationMatches = Locations
      .filter(location => {
        let { borough, city, country } = location
        return (
          (borough.toLowerCase()).includes(this.state.location.toLowerCase()) ||
          (city.toLowerCase()).includes(this.state.location.toLowerCase()) ||
          (country.toLowerCase()).includes(this.state.location.toLowerCase())
        )
      })
      .slice(0, 4)

    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.parent}>
          {/* SEARCH */}
          <View style={styles.firstChild}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Landing')}>
              <GoBack color={'black'} />
            </TouchableOpacity>
            <TextInput
              autoFocus
              onChangeText={value => this.changeLocationText(value)}
              placeholder='Search by City'
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
            {locationMatches.length > 0 ? (
              locationMatches.map((location, index) => {
                return (
                  (lodash.isEqual(location, query.location)) ?
                    <LinearGradientBorder key={index}>
                      <TouchableOpacity
                        key={index}
                        onPress={() => {
                          this.setState({
                            location: location.borough || location.city,
                            query: { ...query, location }
                          })
                          Keyboard.dismiss()
                        }}
                      >
                        <Location location={formatLocationObject(location)} />
                      </TouchableOpacity>
                    </LinearGradientBorder>
                    :
                    <TouchableOpacity
                      key={index}
                      onPress={() => {
                        this.setState({
                          location: location.borough || location.city,
                          query: { ...query, location }
                        })
                        Keyboard.dismiss()
                      }}
                    >
                      <Location location={formatLocationObject(location)} />
                    </TouchableOpacity>

                )
              })
            ) : (
                <Text style={defaultStyles.informativeText}>
                  No Locations Found.
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
            <ActivityScrollView changeActivity={this.changeActivity} selectedActivityIndex={this.state.selectedActivityIndex} />
          </View>

          <View>
            <InlineIcon
              IconTag='FontAwesome'
              iconName='money'
              label={`Price Range: $${x} - $${y}`}
            />

            <PriceSlider handlePriceChange={this.handlePriceChange} min = {x} max={y} />
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
              onDateSelected={momentDate => this.setState({
                query: { ...this.state.query, date: momentDate.toDate().getTime() }
              })}
            />
          </View>

          <View style={styles.divider}>
            <TouchableOpacity
              onPress={this.doSearch}
            >
              <GradientButton text="SEARCH" />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}
