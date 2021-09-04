import { addResolversToSchema } from '@graphql-tools/schema'
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { resolvers } from './resolver'
import path from 'path'

const schemasPath = path.resolve(__dirname, 'schema.graphql')

const typeDefs = loadSchemaSync(schemasPath, {
  loaders: [
    new GraphQLFileLoader()
  ]
})

export const schema = addResolversToSchema({
  schema: typeDefs,
  resolvers,
})
