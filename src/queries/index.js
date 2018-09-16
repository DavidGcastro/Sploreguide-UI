import gql from 'graphql-tag'

const EXPERIENCE_FIELD_FRAGMENTS = gql`
  fragment experienceFields on Experience {
    _id
    title
    location {
      _id
      borough
      city
      country
    }
    host {
      firstName
      profilePicture
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
`
const GET_EXPERIENCES_BY_CATEGORY = gql`
  query getExperiencesByCategory ($input: GetExperienceInput) {
    getExperiences(input: $input) {
      ...experienceFields
    }
  }${EXPERIENCE_FIELD_FRAGMENTS}
`
const GET_EXPERIENCES_BY_ID = gql`
  query getExperiencesById($experiences: [ID!]) {
    getExperiencesById(experiences: $experiences) {
      ...experienceFields
    }
  }${EXPERIENCE_FIELD_FRAGMENTS}
`

const SEARCH_EXPERIENCES = gql`
  query getExperiencesBySearchQuery($input: SearchActivity) {
    searchExperiences(input: $input) {
      ...experienceFields
    }
  }${EXPERIENCE_FIELD_FRAGMENTS}
`

const CURRENT_USER = gql`
{
  currentUser {
    _id
    firstName
    lastName
    email
    favorites
    profilePicture
  }
}
`
export {
  CURRENT_USER,
  GET_EXPERIENCES_BY_CATEGORY,
  GET_EXPERIENCES_BY_ID,
  SEARCH_EXPERIENCES
}
