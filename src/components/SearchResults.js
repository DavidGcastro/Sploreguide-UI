import React from 'react'
import { View } from 'react-native'
import ExperiencesFlatList from './ExperiencesFlatList'

let SearchResults = ({ searchExperiences, favorites, navigation, refetch }) => {
  if (searchExperiences) {
    return (
      <View style={{marginTop: 10}}>
        <ExperiencesFlatList
          navigation={navigation}
          experiences={searchExperiences}
          favoriteIds={favorites}
          confirm={false}
          refetch={refetch}
        />
      </View>
    )
  } else {
    return null
  }
}

export default SearchResults
