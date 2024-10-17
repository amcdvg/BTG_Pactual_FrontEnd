import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelFundComponent } from './cancel-fund.component';

describe('CancelFundComponent', () => {
  let component: CancelFundComponent;
  let fixture: ComponentFixture<CancelFundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelFundComponent]
    });
    fixture = TestBed.createComponent(CancelFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
