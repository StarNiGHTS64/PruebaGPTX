import { GraphQLID, GraphQLList } from "graphql";
import { Person } from "../../Entities/Person";
import { PersonType } from "../Types/Person";

export const GET_ALL_PEOPLE = {
    type: new GraphQLList(PersonType),
    async resolve() {

        const result = await Person.find()

        //console.log(result);

        return result;
    }
}

export const GET_PERSON = {
    type: PersonType,
    args: {
        id: {type: GraphQLID}
    },
    async resolve(_: any, args: any){

        const result = await Person.findBy({
            id: args.id
        })

        //console.log(result)

        return result[0];
    }
}