import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CreateBookContainerComponent } from './create-book-container/create-book-container.component';
import { BookFormComponent } from './book-form/book-form.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent,
    BookDetailsComponent,
    CreateBookContainerComponent,
    BookFormComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
