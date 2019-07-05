import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  results$: Observable<Book[]>;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      term: new FormControl('')
    });

    this.results$ = this.searchForm.get('term')
      .valueChanges.pipe(
        filter(term => term.length >= 3),
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap(term => this.bs.search(term))
      );
  }

}

/*
- erst ab 3 Zeichen Länge suchen
- nicht bei jedem Tastenanschlag HTTP-Request ausführen
- keine zwei selben Suchbegriffe nacheinander (Tipp: Handout)
- kein manuelles Subscribe
- Buchtitel in Liste darstellen (ggf. Link auf Detailseite)
*/
