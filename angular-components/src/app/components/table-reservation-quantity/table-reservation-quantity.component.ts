import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-reservation-quantity',
  templateUrl: './table-reservation-quantity.component.html',
  styleUrls: ['./table-reservation-quantity.component.scss']
})
export class TableReservationQuantityComponent implements OnInit {

  @Output() value = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
