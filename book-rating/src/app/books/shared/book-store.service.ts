import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    // TODO: Error Handling
    // TODO: Echtes Book erzeugen
    return this.http.get<Book[]>(`${this.api}/books`);
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.api}/books/${isbn}`);
  }

  create(book: Book) {
    return this.http.post(
      `${this.api}/books`,
      book,
      { responseType: 'text' }
    );
  }

  delete(isbn: string) {
    return this.http.delete(
      `${this.api}/book/${isbn}`,
      { responseType: 'text' }
    );
  }

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
