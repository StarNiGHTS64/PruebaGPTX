import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ],
})
export class HeaderModule { }
