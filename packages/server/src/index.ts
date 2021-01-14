import fs from 'fs'
import path from 'path'
import { ApolloServer, gql } from 'apollo-server'
import { resolvers } from './resolvers'

const typeDefs = gql(fs.readFileSync(path.resolve(__dirname, '../graphql/schema.graphql'), 'utf8'))

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(4000).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
