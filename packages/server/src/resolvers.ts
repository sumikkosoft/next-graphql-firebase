import { QueryResolvers, MutationResolvers } from './gen/schema'

const Query: QueryResolvers = {
  async user() {
    return null
  },
  async users() {
    return null
  }
}

const Mutation: MutationResolvers = {
  async addUser(_parent, args, _context, _info) {
    return { id: 'sadadasd', name: args.name }
  },
  async deleteUser(_parent, args, _context, _info) {
    return { id: args.id, name: 'dsada' }
  }
}

export const resolvers = {
  Query,
  Mutation
}
