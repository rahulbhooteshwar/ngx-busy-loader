import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompleteDemoComponent } from './complete-demo.component';

describe('CompleteDemoComponent', () => {
  let component: CompleteDemoComponent;
  let fixture: ComponentFixture<CompleteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompleteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
