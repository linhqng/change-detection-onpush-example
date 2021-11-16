import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { List } from 'immutable';

@Component({
  selector: 'app-multiple',
  template: `
    {{multiples}}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MultipleComponent {
  @Input() numbers = List<number>();
  @Input() multiplier: number = 0;


  get multiples(): List<number> {
    return this.numbers.map((a) => a * this.multiplier).toList();
  }
}
