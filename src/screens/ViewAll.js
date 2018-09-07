import React from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER } from '../queries'
import ExperiencesList from '../components/ExperiencesList'
import { TOP_TRENDING } from '../queries'


const ViewAll = props => {
  let category = props.navigation.getParam('category') || ['Top Trending', TOP_TRENDING]
  return (
    <Query query={CURRENT_USER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        let favoriteIds = data.currentUser.favorites
        return (<ExperiencesList
          innerQuery={category[1]}
          navigation={props.navigation}
          backButton
          title={category[0]}
          confirm={false}
          dataName={'getExperiences'}
          favoriteIds={favoriteIds}
          variables={{input: {category: category[0]}}}
          blank={'Explore experiences and add a favorite.'} />
        )
      }}
    </Query>
  )
}

export default ViewAll
