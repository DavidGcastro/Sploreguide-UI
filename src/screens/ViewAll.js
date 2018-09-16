import React from 'react'
import { Query } from 'react-apollo'
import { CURRENT_USER } from '../queries'
import ExperiencesList from '../components/ExperiencesList'
import { GET_EXPERIENCES_BY_CATEGORY } from '../queries'

const ViewAll = props => {
  let category = props.navigation.getParam('category') || ['Top Trending', {category: 'Top Trending', limit: 10}]
  return (
    <Query query={CURRENT_USER}>
      {({ loading, error, data }) => {
        if (loading) return 'Loading...'
        if (error) return `Error! ${error.message}`
        let favoriteIds = data.currentUser.favorites
        return (<ExperiencesList
          innerQuery={GET_EXPERIENCES_BY_CATEGORY}
          navigation={props.navigation}
          backButton
          title={category[0]}
          confirm={false}
          dataName={'getExperiences'}
          favoriteIds={favoriteIds}
          variables={{input: {category: category[0], limit: 10}}}
        />
        )
      }}
    </Query>
  )
}

export default ViewAll
