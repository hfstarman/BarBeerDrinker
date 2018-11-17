import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarWeeklyFilterComponent } from './bar-weekly-filter.component';

describe('BarWeeklyFilterComponent', () => {
  let component: BarWeeklyFilterComponent;
  let fixture: ComponentFixture<BarWeeklyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarWeeklyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarWeeklyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
