import gql from 'graphql-tag'

const HIGHEST_RATED = gql`
{
  getExperiences(input: {category: "Highest Rated", limit: 5}) {
    _id
    title
    location {
      _id
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
      _id
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const TOP_TRENDING = gql`
{
  getExperiences(input: {category: "Top Trending", limit: 5}) {

    _id
    title
    location {
      _id
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
      _id
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const WEEKEND_PICKS = gql`
{
  getExperiences(input: {category: "Weekend Picks", limit: 5}) {
    _id
    title
    location {
      _id
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
      _id
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const BEST_VALUE = gql`
{
  getExperiences(input: {category: "Best Value", limit: 5}) {
    _id
    title
    location {
      _id
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
      _id
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const MOST_VIEWED = gql`
{
  getExperiences(input: {category: "Most Viewed", limit: 5}) {
    _id
    title
    location {
      _id
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
      _id
      rating
      comments
      createdAt
      firstName
    }
  }
}`

const GET_EXPERIENCES_BY_ID = gql`
query GetExperiencesById($experiences: [ID!]) {
  getExperiencesById(experiences: $experiences) {
    _id
    title
    location {
      _id
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
      _id
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
  GET_EXPERIENCES_BY_ID
}
