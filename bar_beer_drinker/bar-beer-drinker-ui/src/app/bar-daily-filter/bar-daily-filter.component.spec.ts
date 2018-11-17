import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarDailyFilterComponent } from './bar-daily-filter.component';

describe('BarDailyFilterComponent', () => {
  let component: BarDailyFilterComponent;
  let fixture: ComponentFixture<BarDailyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarDailyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarDailyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
