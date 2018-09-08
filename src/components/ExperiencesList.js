import React from 'react'
import { Query } from 'react-apollo'
import { ScrollView, View, TouchableOpacity, Text } from 'react-native'
import PreviewCard from './PreviewCard'
import GoBack from '../components/GoBack'
import landingStyles from '../styles/landingStyles'
// (favoriteIds || backButton)
//? (
const ExperiencesList = ({ dataName, backButton, title, innerQuery, variables, confirm, favoriteIds, navigation, blank }) => {
  return (
    <View style={{ flex: 1 }}>
      { (backButton)
        ? <View style={{flexDirection: 'row', alignItems: 'baseline', alignContent: 'center', justifyContent: 'space-between', marginTop: 28, marginHorizontal: 20, marginBottom: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
            <GoBack />
          </TouchableOpacity>
          <Text style={landingStyles.TopText}>{title}</Text>
        </View>
        : <Text style={[landingStyles.TopText, { marginBottom: 30, left: 20, top: 20 }]}>{title}</Text>
      }
      <View
        style={{
          alignItems: 'center',
          flex: 1
        }}>

        <Query
          query={innerQuery}
          variables={variables}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) return 'Loading...'
            if (error) return `Error! ${error.message}`
            let experiences = data[dataName]
            return (
              <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}>
                {experiences.map((experience, index) => {
                  let isFavorite=favoriteIds.includes(experience._id)
                  return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={index}
                    onPress={() => {
                      refetch()
                      navigation.navigate('Experience', { isFavorite, experience, previous: navigation.state.routeName  })
                    }
                    }>
              >
                  <PreviewCard
                    experience={experience}
                    isFavorite={isFavorite}
                    confirm={confirm} />
                  </TouchableOpacity>)
                })}
              </ScrollView>
            )
          }}
        </Query>
      </View>
      {
        ((!favoriteIds && blank) &&

          (
            <View style={{
              alignItems: 'center',
              flex: 1
            }}>
              <Text>{blank}</Text>
            </View>
          )
        )
      }
    </View>
  )
}

export default ExperiencesList
