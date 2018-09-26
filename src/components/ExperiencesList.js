import React from 'react'
import { Query } from 'react-apollo'
import { View, TouchableOpacity, Text } from 'react-native'
import GoBack from '../components/GoBack'
import landingStyles from '../styles/landingStyles'
import ExperiencesFlatList from '../components/ExperiencesFlatList'

// (favoriteIds || backButton)
// ? (
const ExperiencesList = ({ dataName, backButton, title, innerQuery, variables, confirm, favoriteIds, navigation, blank }) => {
  return (
    <View style={{ flex: 1 }}>
      { (backButton)
        ? <View style={{flexDirection: 'row', alignItems: 'baseline', alignContent: 'center', justifyContent: 'space-between', marginTop: 28, marginHorizontal: 20, marginBottom: 15}}>
          <TouchableOpacity onPress={() => navigation.navigate('Landing')}>
            <GoBack color={'black'} />
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
              <ExperiencesFlatList
                navigation={navigation}
                experiences={experiences}
                favoriteIds={favoriteIds}
                confirm={confirm}
                refetch={refetch}
              />
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
