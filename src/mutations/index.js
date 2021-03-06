import gql from 'graphql-tag'

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
  login(input:{email: $email, password: $password}) {
    token
  }
}
`

export const signupMutation = gql`
  mutation SignUp($email: String!, $password: String!, $firstName: String!, $lastName: String!, $dateOfBirth: Date!) {
    signup(input: {email: $email, password: $password, firstName: $firstName, lastName: $lastName, dateOfBirth: $dateOfBirth}) {
      token
    }
  }
`

export const fbLoginMutation = gql`
  mutation FBLogin($email: String!, $first_name: String!, $last_name: String!, $id: ID!, $token: String!) {
    loginWithFacebook(input: {email: $email, first_name: $first_name, last_name: $last_name, id: $id, token: $token}) {
      token
    }
  }
`

export const UPDATE_FAVORITES = gql`
  mutation UpdateFavorites($experienceId: ID!) {
    updateUserFavorites(experienceId: $experienceId) {
      _id
      favorites
    }
  }
`

export const SEND_MESSAGE = gql`
  mutation sendMessages($content: String!, $firstName: String!, $lastName: String!, $sender: ID!, $receiver: ID! ) {
    sendMessage(input: {content: $content, firstName: $firstName, lastName: $lastName, sender: $sender, receiver: $receiver}){
      content
    }
  }
`
