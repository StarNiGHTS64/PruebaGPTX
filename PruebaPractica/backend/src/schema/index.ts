import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GRETTING } from './Queries/greeting'
import { CREATE_PERSON } from './Mutations/Person';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GRETTING
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createPerson: CREATE_PERSON,
    },
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});