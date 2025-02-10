import { Component, inject } from '@angular/core';
import { ListPersonComponent } from '../list-person/list-person.component';
import { CommonModule } from '@angular/common';
import { PersonInterface } from '../../person';
import { ListPersonService } from '../../services/list-person.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ListPersonComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  personList: PersonInterface [] = [];
  fileteredPersonList: PersonInterface [] = [];

  listPersonService: ListPersonService = inject(ListPersonService);

  createForm = new FormGroup({
    firstName: new FormControl(''),
    paternLastName: new FormControl(''),
    maternLastName: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  constructor() {
    this.personList = this.listPersonService.getAllPersons();
    this.fileteredPersonList = this.personList;
  }

  createPerson(){
    this.listPersonService.createPerson(
      this.createForm.value.firstName ?? '',
      this.createForm.value.paternLastName ?? '',
      this.createForm.value.maternLastName ?? '',
      this.createForm.value.address ?? '',
      this.createForm.value.phoneNumber ?? '',
    );
  }

  filterPeople(text: string){
    if(!text) {
      this.fileteredPersonList = this.personList;
      return;
    }

    this.fileteredPersonList = this.personList.filter(
      person => 
        person.firstName.toLowerCase().includes(text.toLowerCase()) ||
        person.paternLastName.toLowerCase().includes(text.toLowerCase()) ||
        person.maternLastName.toLowerCase().includes(text.toLowerCase())
    );
  }
}
