import { Component } from '@angular/core';
import { List } from "immutable";


@Component({
  selector: 'app-root',
  template: `
    <h1>OnPush Change Detection</h1>
    <p>We are going to lazy load some numbers with the OnPush change detection strategy</p>

    <app-example [numbers]="numbers"></app-example>
  `,
})
export class AppComponent {
  numbers = List<number>();
}
