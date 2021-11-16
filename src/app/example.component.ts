import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { List } from 'immutable';
import {ExampleService} from "./example.service";


@Component({
  selector: 'app-example',
  template: `
    {{numbers}}
    <br />
    <app-multiple [numbers]="numbers" [multiplier]="10"></app-multiple>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleComponent implements OnInit {
  @Input() numbers = List<number>();

  constructor(
    private changeDetection: ChangeDetectorRef,
    private service: ExampleService
  ) {}

  ngOnInit() {
    this.service.getNumbers().subscribe((data: number) => {
      this.numbers = this.numbers.push(data);
      this.changeDetection.markForCheck();
    });
  }
}
