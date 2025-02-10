import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonInterface } from '../../person';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-person',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './list-person.component.html',
  styleUrl: './list-person.component.scss'
})
export class ListPersonComponent {
  @Input() personInterface!: PersonInterface;
}
