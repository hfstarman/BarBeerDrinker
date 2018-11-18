import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTopManuComponent } from './bar-top-manu.component';

describe('BarTopManuComponent', () => {
  let component: BarTopManuComponent;
  let fixture: ComponentFixture<BarTopManuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarTopManuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarTopManuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
