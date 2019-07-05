import { Component } from '@angular/core';
import { Subject, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new Subject();

  constructor(private es: ExerciseService) { }

  start() {
    this.es.randomError().pipe(
      catchError(err => {
        console.log('ERROR HAPPENED', err);
        // return of('Nichts passiert... ;-)');
        return throwError('Oh no...');
      }),
      // retry(5)
    ).subscribe(
      value => this.logStream$.next(value),
      err => this.logStream$.next('💥 ERROR: ' + err)
    );
  }
}
