import path from 'path'
import { mergeResolvers } from '@graphql-tools/merge'
import { loadFilesSync } from '@graphql-tools/load-files'

// import linkResolver from '../graphql/resolvers/links'

const rootDirectory = process.cwd();

// const linkResolver = require(path.join(rootDirectory, '/graphql/resolvers'))


const resolversArray = loadFilesSync(path.join(rootDirectory, '/graphql/resolvers'), { extensions: ['ts'] })

const resolvers = mergeResolvers(resolversArray)

export default resolvers