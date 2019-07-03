import { TestBed } from '@angular/core/testing';

import { BookRatingService } from './book-rating.service';
import { Book } from './book';

describe('BookRatingService', () => {
  let book: Book;
  let rs: BookRatingService;

  beforeEach(() => {
    // Arrange
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    TestBed.configureTestingModule({});

    rs = TestBed.get(BookRatingService);
  });

  it('should be created', () => {
    const service: BookRatingService = TestBed.get(BookRatingService);
    expect(service).toBeTruthy();
  });

  it('should rate up a book', () => {
    // Act
    const ratedBook = rs.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4);
  });

  it('should rate down a book', () => {
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate higher than 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const ratedBook = rs.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(5);
  });

  it('should not rate lower than 1', () => {
    book.rating = 1;
    const ratedBook = rs.rateDown(book);
    expect(ratedBook.rating).toBe(1);
  });


});
