import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ListPersonService } from '../../services/list-person.service';
import { PersonAttributes } from '../../models/person';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  listPersonService = inject(ListPersonService);
  personInterface: PersonAttributes | undefined;

  constructor(){
    const personId = Number(this.route.snapshot.params['id']);
    this.personInterface = this.listPersonService.getPersonById(personId);
  }
}
