import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from '../shared/book-store.service';
import { Book } from '../shared/book';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;
  book$: Observable<Book>;

  constructor(private route: ActivatedRoute, private bs: BookStoreService) { }

  ngOnInit() {
    // Synchroner Weg
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // TODO: doppeltes subscribe vermeiden (!!!)
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      this.book$ = this.bs.getSingle(isbn);
    });
  }

}
