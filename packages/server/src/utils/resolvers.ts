import { nanoid } from 'nanoid'
import { QueryResolvers, MutationResolvers, User } from '../gen/schema'
import firebaseAdmin from './firebaseAdmin'

const admin = firebaseAdmin()

const Query: QueryResolvers = {
  user(_parent, args, _context, _info) {
    return new Promise((resolve, reject) => {
      admin
        .firestore()
        .collection('users')
        .where('id', '==', args.id)
        .get()
        .then((snapshot) => {
          const _users: User[] = []

          snapshot.forEach((doc) => {
            _users.push(doc.data() as User)
          })
          const _user: User | null = snapshot.size !== 0 ? _users[0] : null
          resolve(_user)
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
          reject(null)
        })
    })
  },
  users() {
    return new Promise((resolve, reject) => {
      admin
        .firestore()
        .collection('users')
        .get()
        .then((snapshot) => {
          const _users: User[] = []
          snapshot.forEach((doc) => {
            _users.push(doc.data() as User)
          })
          resolve(_users)
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
          reject(null)
        })
    })
  }
}

const Mutation: MutationResolvers = {
  addUser(_parent, args, _context, _info) {
    return new Promise((resolve, reject) => {
      admin
        .firestore()
        .collection('users')
        .add({
          id: nanoid(),
          name: args.name
        })
        .then((snapshot) => {
          snapshot.get().then((doc) => {
            resolve(doc.data() as User)
          })
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
          reject(null)
        })
    })
  },
  deleteUser(_parent, args, _context, _info) {
    // return { id: args.id, name: 'dsada' }
    return new Promise((resolve, reject) => {
      admin
        .firestore()
        .collection('users')
        .where('id', '==', args.id)
        .get()
        .then((snapshot) => {
          const _users: User[] = []
          snapshot.forEach((doc) => {
            _users.push(doc.data() as User)
            doc.ref.delete()
          })
          resolve(_users[0])
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
          reject(null)
        })
    })
  }
}

export const resolvers = {
  Query,
  Mutation
}
