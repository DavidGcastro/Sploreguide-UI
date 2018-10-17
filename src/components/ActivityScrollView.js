import React, { Component } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import LinearGradientBorder from '../components/LinearGradientBorder'
import ActivityCard from '../components/ActivityCard'
import Activities from '../Activities'

class ActivityScrollView extends Component {
  render () {
    let {changeActivity, selectedActivityIndex} = this.props
    return <ScrollView
      showsVerticalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        flexDirection: 'row'
      }}>{
        Activities.map(
          (activity, index) =>
            index === selectedActivityIndex ? (
              <LinearGradientBorder key={index}>
                <TouchableOpacity
                  onPress={() => {
                    changeActivity(index, activity)
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
                  changeActivity(index, activity)
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
