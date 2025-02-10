import {GraphQLBoolean, GraphQLID, GraphQLString} from 'graphql';
import {Person} from '../../Entities/Person';
import { PersonType, PersonResponse } from '../Types/Person';
import { resolve } from 'path';

export const CREATE_PERSON = {
    type: PersonType,
    args: {
        firstName: {type: GraphQLString},
        patternLastName: {type: GraphQLString},
        matternLastName: {type: GraphQLString},
        address: {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
    },
    async resolve(_: any, args: any){
        const {firstName, patternLastName, matternLastName, address, phoneNumber} = args;
        
        const result = await Person.insert({
            firstName: firstName,
            patternLastName: patternLastName,
            matternLastName: matternLastName,
            address: address,
            phoneNumber: phoneNumber,
        })

        //console.log(result)

        const response = await Person.findBy({
            id: result.raw.insertId
        })

        //console.log(response[0]);

        return response[0];
    }
}

export const DELETE_PERSON = {
    type: GraphQLBoolean,
    args: {
        id: { type: GraphQLID },
    },
    async resolve(_: any, {id}: any) {
        const result = await Person.delete(id)
        //console.log(result);
        if(result.affected === 1) return true;
        return false;
    }
}