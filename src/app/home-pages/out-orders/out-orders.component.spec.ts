import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOrdersComponent } from './out-orders.component';

describe('OutOrdersComponent', () => {
  let component: OutOrdersComponent;
  let fixture: ComponentFixture<OutOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
