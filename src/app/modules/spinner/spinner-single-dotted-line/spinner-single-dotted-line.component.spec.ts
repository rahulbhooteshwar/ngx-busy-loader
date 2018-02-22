import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerSingleDottedLineComponent } from './spinner-single-dotted-line.component';

describe('SpinnerSingleDottedLineComponent', () => {
  let component: SpinnerSingleDottedLineComponent;
  let fixture: ComponentFixture<SpinnerSingleDottedLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinnerSingleDottedLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerSingleDottedLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
