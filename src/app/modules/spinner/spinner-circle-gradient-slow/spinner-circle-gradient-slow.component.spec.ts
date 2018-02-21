import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCircleGradientSlowComponent } from './spinner-circle-gradient-slow.component';

describe('SpinnerCircleGradientSlowComponent', () => {
  let component: SpinnerCircleGradientSlowComponent;
  let fixture: ComponentFixture<SpinnerCircleGradientSlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCircleGradientSlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCircleGradientSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
