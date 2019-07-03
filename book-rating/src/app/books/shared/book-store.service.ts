import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor() { }

  getAllStatic() {
    return [
      {
        isbn: '000',
        title: 'Angular',
        description: 'Grundlagen und fortgeschrittene Themen',
        rating: 5
      },
      {
        isbn: '111',
        title: 'React',
        description: 'Das andere Framework',
        rating: 3
      }
    ];
  }
}
