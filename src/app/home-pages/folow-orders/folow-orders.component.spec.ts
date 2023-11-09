import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolowOrdersComponent } from './folow-orders.component';

describe('FolowOrdersComponent', () => {
  let component: FolowOrdersComponent;
  let fixture: ComponentFixture<FolowOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolowOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FolowOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
