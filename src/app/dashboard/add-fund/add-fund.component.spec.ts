import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BondingFundComponent } from './add-fund.component';

describe('BondingFundComponent', () => {
  let component: BondingFundComponent;
  let fixture: ComponentFixture<BondingFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BondingFundComponent]
    });
    fixture = TestBed.createComponent(BondingFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
