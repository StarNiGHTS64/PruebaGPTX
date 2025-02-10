import { Injectable } from '@angular/core';
import { PersonAttributes } from '../models/person';

@Injectable({
  providedIn: 'root'
})
export class ListPersonService {

  personInterfaceList: PersonAttributes [] = [
    {
    id: 64,
    firstName: 'Carlos',
    paternLastName: 'Becerra',
    maternLastName: 'Ortiz',
    adress: 'La grieta del invocador',
    phoneNumber: '444-444-4444',
    },
    {
      id: 65,
      firstName: 'Eduardo',
      paternLastName: 'Cuesta',
      maternLastName: 'Cordoba',
      adress: 'El abismo de los lamentos',
      phoneNumber: '888-888-8888',
    },
    {
      id: 66,
      firstName: 'Edson',
      paternLastName: 'Vazquez',
      maternLastName: 'Cruz',
      adress: 'La cicatriz de cristal',
      phoneNumber: '777-777-777',
    },
    {
      id: 67,
      firstName: 'Sofia',
      paternLastName: 'Soto',
      maternLastName: 'Ayala',
      adress: 'Ciudad Valoran',
      phoneNumber: '222-222-222',
    },
    {
      id: 68,
      firstName: 'Paulo',
      paternLastName: 'Nome',
      maternLastName: 'Acuerdo',
      adress: 'El bosque retorcido',
      phoneNumber: '333-333-3333',
    }
  ];

  getAllPersons(): PersonAttributes[] {
    return this.personInterfaceList
  }

  getPersonById(id: number): PersonAttributes | undefined{
    return this.personInterfaceList.find(person =>
      person.id == id
    );
  }

  createPerson(firstName: string, paternLastName: string, maternLastName: string, adress: string, phoneNumber: string) {
    console.log(`Person Data Received: First Name: ${firstName}, Last Name: ${paternLastName} ${maternLastName}, Adress: ${adress}, Phone: ${phoneNumber}`)
  }

  constructor() { }
}
