import gql from "graphql-tag"

export const QUERY_GET_POSTITS = gql`
  query getUserPostIts {
    getUserPostIts {
      id
      title
      notes {
        id
        text
        marked
      }
    }
  }
`

export const QUERY_LOGIN = gql`
  query login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        id
      }
    }
  }
`
