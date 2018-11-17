import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerWeeklyFilterComponent } from './beer-weekly-filter.component';

describe('BeerWeeklyFilterComponent', () => {
  let component: BeerWeeklyFilterComponent;
  let fixture: ComponentFixture<BeerWeeklyFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerWeeklyFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerWeeklyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
