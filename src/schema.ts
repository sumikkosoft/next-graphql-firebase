import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    me(id: ID!): String
  }
`

export default typeDefs
