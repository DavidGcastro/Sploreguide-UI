import gql from 'graphql-tag'

const HIGHEST_RATED = gql`
{
  getExperiences(category: "Highest Rated") {
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

const TOP_TRENDING= gql`
{
  getExperiences(category: "Top Trending") {
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

const WEEKEND_PICKS= gql`
{
  getExperiences(category: "Weekend Picks") {
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

const BEST_VALUE= gql`
{
  getExperiences(category: "Best Value") {
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

const MOST_VIEWED= gql`
{
  getExperiences(category: "Most Viewed") {
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



export { TOP_TRENDING, HIGHEST_RATED, WEEKEND_PICKS, BEST_VALUE, MOST_VIEWED }
