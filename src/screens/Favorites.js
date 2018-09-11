import React, { Component } from 'react'
import { Query } from 'react-apollo'
import ExperiencesList from '../components/ExperiencesList'
import { CURRENT_USER, GET_EXPERIENCES_BY_ID } from '../queries'

class Favorites extends Component {
  render () {
    return (
      <Query query={CURRENT_USER}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) return `Error! ${error.message}`
          let favoriteIds = data.currentUser.favorites
          return (<ExperiencesList
            innerQuery={GET_EXPERIENCES_BY_ID}
            navigation={this.props.navigation}
            backButton={false}
            confirm
            title={'Favorites'}
            dataName={'getExperiencesById'}
            favoriteIds={favoriteIds}
            variables={{ experiences: favoriteIds }}
            blank={'Explore experiences and add a favorite.'} />)
        }}
      </Query>
    )
  }
}

export default Favorites
