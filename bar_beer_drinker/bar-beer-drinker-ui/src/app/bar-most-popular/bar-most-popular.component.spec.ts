import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMostPopularComponent } from './bar-most-popular.component';

describe('BarMostPopularComponent', () => {
  let component: BarMostPopularComponent;
  let fixture: ComponentFixture<BarMostPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarMostPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarMostPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
