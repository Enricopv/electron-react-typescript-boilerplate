import gql from "graphql-tag"

export const GET_POSTITS = gql`
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