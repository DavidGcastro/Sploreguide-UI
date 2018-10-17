import React, { Component } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import LinearGradientBorder from '../components/LinearGradientBorder'
import ActivityCard from '../components/ActivityCard'
import Activities from '../Activities'

class ActivityScrollView extends Component {

  
   state = {
      query: {},
      selectedActivityIndex: -1
    }
  

  changeActivity (selectedActivityIndex) {
    if (selectedActivityIndex == this.state.selectedActivityIndex) {
      selectedActivityIndex = -1
    }
    this.setState({ selectedActivityIndex })
  }

  render () {
    console.log(this.state)
    return <ScrollView
      showsVerticalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        flexDirection: 'row'
      }}>{
        Activities.map(
          (activity, index) =>
            index === this.state.selectedActivityIndex ? (
              <LinearGradientBorder key={index}>
                <TouchableOpacity
                  onPress={() => {
                    this.changeActivity(index)
                    this.setState({ query: { ...this.query, activityType: '' } })
                  }}
                >
                  <ActivityCard
                    activity={activity}
                    label={activity}
                  />
                </TouchableOpacity>
              </LinearGradientBorder>
            ) : (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  this.changeActivity(index)
                  this.setState({ query: { ...this.query, activityType: activity } })
                }}
              >
                <ActivityCard
                  activity={activity}
                  label={activity}
                />
              </TouchableOpacity>
            )
        )}
    </ScrollView>
  }
}

export default ActivityScrollView
