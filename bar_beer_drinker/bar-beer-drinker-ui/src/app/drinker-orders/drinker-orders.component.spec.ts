import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkerOrdersComponent } from './drinker-orders.component';

describe('DrinkerOrdersComponent', () => {
  let component: DrinkerOrdersComponent;
  let fixture: ComponentFixture<DrinkerOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkerOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkerOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
