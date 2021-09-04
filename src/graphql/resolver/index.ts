import { 
  queries as userQueries, 
  mutations as userMutations 
} from './users'

export const resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
}
