import { GraphQLAbstractType, GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";

export const PersonType = new GraphQLObjectType({
    name: 'PersonAttributes',
    fields: {
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        patternLastName: {type: GraphQLString},
        matternLastName: {type: GraphQLString},
        address: {type: GraphQLString},
        phoneNumber: {type: GraphQLString}
    }
})

export const PersonResponse = new GraphQLObjectType({
    name: 'PersonResponse',
    fields: {
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        patternLastName: {type: GraphQLString},
        matternLastName: {type: GraphQLString},
        address: {type: GraphQLString},
        phoneNumber: {type: GraphQLString}
    }
})