import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import { GRETTING } from './Queries/greeting'
import { GET_ALL_PEOPLE, GET_PERSON } from './Queries/Person';
import { CREATE_PERSON } from './Mutations/Person';

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        greeting: GRETTING,
        getAllPeople: GET_ALL_PEOPLE,
        getPerson: GET_PERSON,
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