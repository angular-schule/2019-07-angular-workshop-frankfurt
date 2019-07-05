import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Book } from './book';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${this.api}/books`).pipe(
      map(rawBooks => rawBooks.map(
        rawBook => this.bookFromRaw(rawBook)
      )),
      catchError(err => of(this.getAllStatic()))
    );
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.api}/books/${isbn}`).pipe(
      map(rawBook => this.bookFromRaw(rawBook))
    );
  }

  search(term: string) {
    return this.http.get<any[]>(`${this.api}/books/search/${term}`).pipe(
      map(rawBooks => (rawBooks ? rawBooks : [])),
      map(rawBooks => rawBooks.map(rawBook => this.bookFromRaw(rawBook)))
    );
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

  private bookFromRaw(rawBook: any): Book {
    return {
      isbn: rawBook.isbn,
      title: rawBook.title,
      description: rawBook.description,
      rating: rawBook.rating
    };
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
