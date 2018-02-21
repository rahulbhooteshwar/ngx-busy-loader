import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCircleDottedGradientComponent } from './spinner-circle-dotted-gradient.component';

describe('SpinnerCircleDottedGradientComponent', () => {
  let component: SpinnerCircleDottedGradientComponent;
  let fixture: ComponentFixture<SpinnerCircleDottedGradientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCircleDottedGradientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCircleDottedGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
