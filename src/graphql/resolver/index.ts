import { queries as userQueries } from './users'

export const resolvers = {
  Query: {
    ...userQueries,
  },
}
