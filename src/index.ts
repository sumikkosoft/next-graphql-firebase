import { ApolloServer } from 'apollo-server'
import typeDefs from './schema'

const resolvers = {
  Query: {
    me: (_: any, { id }: { id: string }) => {
      console.log(id)
      return 'Hello'
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
