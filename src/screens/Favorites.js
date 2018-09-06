import React, { Component } from 'react'
import { Query } from 'react-apollo'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import PreviewCard from '../components/PreviewCard'
import ExperiencesList from '../components/ExperiencesList'
import landingStyles from '../styles/landingStyles'
import { CURRENT_USER, GET_EXPERIENCES_BY_ID } from '../queries'

class Favorites extends Component {
  render () {
    return (
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          let experienceIds = data.currentUser.favorites
          return (<ExperiencesList
            innerQuery={GET_EXPERIENCES_BY_ID}
            confirm={true}
            experienceIds={experienceIds}
            blank={'Explore experiences and add a favorite.'} />)
        }}
      </Query>
    )
  }
}

export default Favorites
