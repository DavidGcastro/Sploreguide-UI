import React from 'react'
import { Query, Mutation } from 'react-apollo'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import PreviewCard from '../components/PreviewCard'
import landingStyles from '../styles/landingStyles'
import { CURRENT_USER, GET_EXPERIENCES_BY_ID } from '../queries'

const PreviewScreen = props => {
  return (
    <Query query={CURRENT_USER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        let experiences = data.currentUser.favorites
        return (
          <View style={{ flex: 1 }}>
            <Text style={[landingStyles.TopText, { marginBottom: 30, left: 20, top: 20 }]}>Favorites</Text>
            <View
              style={{
                alignItems: 'center',
                flex: 1
              }}>
              {
                (experiences)
                  ? (
                    <Query
                      query={GET_EXPERIENCES_BY_ID}
                      variables={{ experiences }}
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
                                  props.navigation.navigate('Experience', { experience })
                                }>
                          ><PreviewCard experience={experience} />
                              </TouchableOpacity>
                            ))}
                          </ScrollView>

                        )
                      }}
                    </Query>)
                  : (<View >
                    <Text>Explore experiences and add a favorite.</Text>
                  </View>)
              }
            </View>
          </View>
        )
      }}
    </Query>

  )
}

export default PreviewScreen
