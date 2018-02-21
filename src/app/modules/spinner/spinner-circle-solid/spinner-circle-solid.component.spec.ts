import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCircleSolidComponent } from './spinner-circle-solid.component';

describe('SpinnerCircleSolidComponent', () => {
  let component: SpinnerCircleSolidComponent;
  let fixture: ComponentFixture<SpinnerCircleSolidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerCircleSolidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerCircleSolidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
