import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {

  @Input() value: number;
  @Input() minValue: number;
  @Output() valueChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  get isDisabled(): boolean {
    return this.minValue !== undefined ? this.value <= this.minValue : false;
  }

  increase() {
    this.value += 1;
    this.valueChange.emit(this.value);
  }

  decrease() {
    this.value -= 1;
    this.valueChange.emit(this.value);
  }
}
