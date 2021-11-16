import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, concatAll } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  getNumbers(): Observable<number> {
    return of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9).pipe(
      map(data => of(data).pipe(delay(1000))),
      concatAll()
    );
  }
}
