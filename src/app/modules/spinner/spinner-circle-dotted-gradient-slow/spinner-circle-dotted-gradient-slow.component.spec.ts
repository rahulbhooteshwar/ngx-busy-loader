import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCircleDottedGradientSlowComponent } from './spinner-circle-dotted-gradient-slow.component';

describe('SpinnerCircleDottedGradientSlowComponent', () => {
  let component: SpinnerCircleDottedGradientSlowComponent;
  let fixture: ComponentFixture<SpinnerCircleDottedGradientSlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCircleDottedGradientSlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCircleDottedGradientSlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
