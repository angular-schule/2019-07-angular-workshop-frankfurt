import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  isbn: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Synchroner Weg
    // this.isbn = this.route.snapshot.paramMap.get('isbn');

    // Asynchroner Weg
    this.route.paramMap.subscribe(params => {
      this.isbn = params.get('isbn');
    });
  }

}
