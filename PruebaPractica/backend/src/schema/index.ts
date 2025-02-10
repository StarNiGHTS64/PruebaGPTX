import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GRETTING } from './Queries/greeting'

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GRETTING
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery,
    //mutation: {}
})