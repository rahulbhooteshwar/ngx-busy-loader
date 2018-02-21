import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCircleDottedComponent } from './spinner-circle-dotted.component';

describe('SpinnerCircleDottedComponent', () => {
  let component: SpinnerCircleDottedComponent;
  let fixture: ComponentFixture<SpinnerCircleDottedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCircleDottedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCircleDottedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
