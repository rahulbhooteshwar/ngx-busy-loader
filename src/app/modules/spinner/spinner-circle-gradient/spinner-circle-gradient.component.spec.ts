import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerCircleGradientComponent } from './spinner-circle-gradient.component';

describe('SpinnerCircleGradientComponent', () => {
    let component: SpinnerCircleGradientComponent;
    let fixture: ComponentFixture<SpinnerCircleGradientComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SpinnerCircleGradientComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SpinnerCircleGradientComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
