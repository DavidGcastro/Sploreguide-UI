import gql from 'graphql-tag'

export const loginMutation = gql`
  mutation Login($email: String!, $password: String!) {
  login(input:{email: $email, password: $password}) {
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
