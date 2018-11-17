import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTopConsumersComponent } from './beer-top-consumers.component';

describe('BeerTopConsumersComponent', () => {
  let component: BeerTopConsumersComponent;
  let fixture: ComponentFixture<BeerTopConsumersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerTopConsumersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTopConsumersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
