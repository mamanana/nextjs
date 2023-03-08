// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createSchema, createYoga } from 'graphql-yoga'
import { resolvers } from '../../graphql/resolvers'
import { typeDefs } from '../../graphql/schema'

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  schema: createSchema({
    typeDefs,
    resolvers
  }),
  graphqlEndpoint: '/api/graphql'
})

export const config = {
  api: {
    bodyParser: false
  }
}
