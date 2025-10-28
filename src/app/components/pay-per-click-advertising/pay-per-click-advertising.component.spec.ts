import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPerClickAdvertisingComponent } from './pay-per-click-advertising.component';

describe('PayPerClickAdvertisingComponent', () => {
  let component: PayPerClickAdvertisingComponent;
  let fixture: ComponentFixture<PayPerClickAdvertisingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayPerClickAdvertisingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPerClickAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
