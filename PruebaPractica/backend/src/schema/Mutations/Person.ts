import {GraphQLBoolean, GraphQLID, GraphQLString} from 'graphql';
import {Person} from '../../Entities/Person';
import { PersonType, PersonResponse } from '../Types/Person';
import { MessageType } from '../Types/Message';


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

export const UPDATE_PERSON = {
    type: MessageType,
    args: {
        id: {type: GraphQLID},
        firstName: {type: GraphQLString},
        patternLastName: {type: GraphQLString},
        matternLastName: {type: GraphQLString},
        address: {type: GraphQLString},
        phoneNumber: {type: GraphQLString},
    },
    async resolve(_: any, {id, firstName, patternLastName, matternLastName, address, phoneNumber}: any){
        console.log(id, firstName, patternLastName, matternLastName, address, phoneNumber);

        const userFound = await Person.findBy({id})
        console.log(userFound);

        if(userFound.length === 0) return {
            success: false,
            message: "Person not found",
        }

        const response = await Person.update({id}, {
            firstName: firstName, 
            patternLastName: patternLastName, 
            matternLastName: matternLastName, 
            address: address, 
            phoneNumber: phoneNumber
        })

        if(response.affected === 0) return false;

        return {
            success: true,
            message: "Person updated successfully",
        };
    }
}