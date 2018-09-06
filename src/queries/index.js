import gql from 'graphql-tag'

const HIGHEST_RATED = gql`
{
  getExperiences(category: "Highest Rated") {
    _id
    title
    location {
      borough
      city
      country
    }
    duration
    languages
    activityType
    included
    overview
    media
    basePricePerPerson
    reviews {
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const TOP_TRENDING = gql`
{
  getExperiences(category: "Top Trending") {
    _id
    title
    location {
      borough
      city
      country
    }
    duration
    languages
    activityType
    included
    overview
    media
    basePricePerPerson
    reviews {
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const WEEKEND_PICKS = gql`
{
  getExperiences(category: "Weekend Picks") {
    _id
    title
    location {
      borough
      city
      country
    }
    duration
    languages
    activityType
    included
    overview
    media
    basePricePerPerson
    reviews {
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const BEST_VALUE = gql`
{
  getExperiences(category: "Best Value") {
    _id
    title
    location {
      borough
      city
      country
    }
    duration
    languages
    activityType
    included
    overview
    media
    basePricePerPerson
    reviews {
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const MOST_VIEWED = gql`
{
  getExperiences(category: "Most Viewed") {
    _id
    title
    location {
      borough
      city
      country
    }
    duration
    languages
    activityType
    included
    overview
    media
    basePricePerPerson
    reviews {
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const GET_USER_FAVORITE_EXPERIENCES = gql`
query GetUserFavoriteExperiences($experiences: [ID!]) {
  getUserFavoriteExperiences(experiences: $experiences) {
    _id
    title
    location {
      borough
      city
      country
    }
    duration
    languages
    activityType
    included
    overview
    media
    basePricePerPerson
    reviews {
      rating
      comments
      createdAt
      firstName
    }
  }
}
`

const CURRENT_USER = gql`
{
  currentUser {
    _id
    firstName
    lastName
    email
    favorites
  }
}
`
export {
  CURRENT_USER,
  TOP_TRENDING,
  HIGHEST_RATED,
  WEEKEND_PICKS,
  BEST_VALUE,
  MOST_VIEWED,
  GET_USER_FAVORITE_EXPERIENCES
}
