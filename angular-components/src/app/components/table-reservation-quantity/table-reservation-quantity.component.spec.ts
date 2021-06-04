import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReservationQuantityComponent } from './table-reservation-quantity.component';

describe('TableReservationQuantityComponent', () => {
  let component: TableReservationQuantityComponent;
  let fixture: ComponentFixture<TableReservationQuantityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableReservationQuantityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReservationQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
