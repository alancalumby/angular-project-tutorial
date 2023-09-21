import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateDetailsComponent } from './exchange-rate-details.component';

describe('ExchangeRateDetailsComponent', () => {
  let component: ExchangeRateDetailsComponent;
  let fixture: ComponentFixture<ExchangeRateDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExchangeRateDetailsComponent]
    });
    fixture = TestBed.createComponent(ExchangeRateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
