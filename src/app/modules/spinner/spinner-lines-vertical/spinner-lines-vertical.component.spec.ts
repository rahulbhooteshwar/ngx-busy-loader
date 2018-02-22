import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerLinesVerticalComponent } from './spinner-lines-vertical.component';

describe('SpinnerLinesVerticalComponent', () => {
  let component: SpinnerLinesVerticalComponent;
  let fixture: ComponentFixture<SpinnerLinesVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerLinesVerticalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerLinesVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
