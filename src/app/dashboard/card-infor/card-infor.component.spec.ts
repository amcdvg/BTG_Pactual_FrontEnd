import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInforComponent } from './card-infor.component';

describe('CardInforComponent', () => {
  let component: CardInforComponent;
  let fixture: ComponentFixture<CardInforComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardInforComponent]
    });
    fixture = TestBed.createComponent(CardInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
