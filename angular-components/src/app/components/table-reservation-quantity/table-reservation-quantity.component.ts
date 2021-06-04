import { Component, EventEmitter, Input, Output } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-table-reservation-quantity',
  templateUrl: './table-reservation-quantity.component.html',
  styleUrls: ['./table-reservation-quantity.component.scss'],
})
export class TableReservationQuantityComponent {
  @Output() valueEmitter = new EventEmitter<number>();
  @Input() maxValue: number;
  permittedValues: number[];
  value = 0;

  constructor() {
    this.permittedValues = [];
    range(0, this.maxValue + 1).subscribe(x => this.permittedValues.push(x));
    console.log(this.permittedValues);
  }

  changeValue(actionSymbol: '+' | '-'): void {
    const prevValue = this.value;

    if (!this.permittedValues.includes(this.value)) { return; }

    const nextValue = actionSymbol === '+' ?
      this.value !== this.permittedValues[this.permittedValues.length - 1] ?
        this.value + 1 : this.value :
      this.value !== this.permittedValues[0] ?
        this.value - 1 : this.value;

    if (prevValue !== nextValue) {
      this.value = nextValue;
      this.valueEmitter.emit(this.value);
    }
  }
}
