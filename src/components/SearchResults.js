import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import PreviewCard from './PreviewCard'

let SearchResults = ({ searchExperiences, favorites, navigation }) => {
  if (searchExperiences) {
    return (
      <ScrollView
        style={{marginTop: 20}}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {searchExperiences.map((experience, index) => {
          let isFavorite = favorites.includes(experience._id)
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => {
                navigation.navigate('Experience', {
                  isFavorite,
                  experience,
                  previous: navigation.state.routeName })
              }
              }>
    >
              <PreviewCard
                experience={experience}
                isFavorite={isFavorite}
                confirm={false} />
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  } else {
    return null
  }
}

export default SearchResults
