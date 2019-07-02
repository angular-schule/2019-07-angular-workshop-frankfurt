import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BookComponent } from './book/book.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ButtonSharedModule } from '../button-shared/button-shared.module';

@NgModule({
  declarations: [
    BookComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ButtonSharedModule
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
