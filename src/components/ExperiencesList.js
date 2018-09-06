import React from 'react'
import { Query } from 'react-apollo'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import PreviewCard from './PreviewCard'
import landingStyles from '../styles/landingStyles'

const ExperiencesList = ({ innerQuery, confirm, experienceIds, navigation, blank }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text style={[landingStyles.TopText, { marginBottom: 30, left: 20, top: 20 }]}>Favorites</Text>
      <View
        style={{
          alignItems: 'center',
          flex: 1
        }}>
        {
          (experienceIds)
            ? (
              <Query
                query={innerQuery}
                variables={{ experiences: experienceIds }}
              >
                {({ loading, error, data }) => {
                  if (loading) return 'Loading...'
                  if (error) return `Error! ${error.message}`
                  let experiences = data.getExperiencesById
                  return (
                    <ScrollView
                      showsHorizontalScrollIndicator={false}
                      showsVerticalScrollIndicator={false}>
                      {experiences.map((experience, index) => (
                        <TouchableOpacity
                          activeOpacity={0.7}
                          key={index}
                          onPress={experience =>
                            navigation.navigate('Experience', { experience })
                          }>
                    >
                          <PreviewCard
                            experience={experience}
                            isFavorite={experienceIds.includes(experience._id)}
                            confirm={confirm} />
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )
                }}
              </Query>)
            : (<View >
              <Text>{blank}}</Text>
            </View>)
        }
      </View>
    </View>
  )
}

export default ExperiencesList