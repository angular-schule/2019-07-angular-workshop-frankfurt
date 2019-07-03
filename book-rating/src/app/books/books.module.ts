import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule
  ]
})
export class BooksModule { }
