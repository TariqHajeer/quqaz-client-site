import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOrdersComponent } from './salary-orders.component';

describe('SalaryOrdersComponent', () => {
  let component: SalaryOrdersComponent;
  let fixture: ComponentFixture<SalaryOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalaryOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalaryOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
