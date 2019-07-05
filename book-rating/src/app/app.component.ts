import { Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Book Rating';
  url = '//angular.schule';
  d = new Date();

  constructor() {

    function producer(o) {
      o.next(1);
      setTimeout(() => o.next(2), 1000);
      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.next(4), 3000);
      setTimeout(() => o.next(5), 4000);
      setTimeout(() => o.complete(), 5000);
    }

    const observer = {
      next: e => console.log(e),
      error: e => console.error('ERROR', e),
      complete: () => console.log('Complete')
    };

    const myObs = new Observable(producer);

    const subscription = myObs.subscribe(e => console.log(e));

    setTimeout(() => subscription.unsubscribe(), 2500);


  }
}
