import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {

  _value: number = 0;
  @Input() 
  get value() {
    return this._value;
  }

  @Input() minValue: number;
  @Output() valueChange = new EventEmitter<number>();

  set value(s) {
    this._value = s;
    this.valueChange.emit(this._value);
  }

  get isDisabled(): boolean {
    return this.minValue !== undefined ? this.value <= this.minValue : false;
  }

  increase() {
    this.value++;
    // this.valueChange.emit(this.value);
  }

  decrease() {
    this.value--;
    // this.valueChange.emit(this.value);
  }
}
