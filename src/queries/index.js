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
  query topTrending ($input: GetExperienceInput) {
    getExperiences(input: $input) {
      ...experienceFields
    }
  }${EXPERIENCE_FIELD_FRAGMENTS}
`
const GET_EXPERIENCES_BY_ID = gql`
  query GetExperiencesById($experiences: [ID!]) {
    getExperiencesById(experiences: $experiences) {
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
  }
}
`
export {
  CURRENT_USER,
  GET_EXPERIENCES_BY_CATEGORY,
  GET_EXPERIENCES_BY_ID
}
