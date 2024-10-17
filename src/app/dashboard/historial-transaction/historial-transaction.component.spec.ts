import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTransactionComponent } from './historial-transaction.component';

describe('HistorialTransactionComponent', () => {
  let component: HistorialTransactionComponent;
  let fixture: ComponentFixture<HistorialTransactionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialTransactionComponent]
    });
    fixture = TestBed.createComponent(HistorialTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
