import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { BookRatingService } from '../shared/book-rating.service';
import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { FancyButtonComponent } from 'src/app/button-shared/fancy-button/fancy-button.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from 'protractor';

fdescribe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let book: Book;
  let ratingMock;

  beforeEach(() => {
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };

    ratingMock = {
      rateUp: () => book
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for rateUp()', () => {
    // Arrange
    const rs = TestBed.get(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    // Act
    component.rateUp(book);

    // Assert
    expect(rs.rateUp).toHaveBeenCalled();
  });

  // DOM-Elemente selektieren
  // fixture.debugElement.query(By.css('button')).nativeElement;
});
