import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerCircleDottedComponent } from './spinner-circle-dotted/spinner-circle-dotted.component';
import { SpinnerCircleDottedGradientComponent } from './spinner-circle-dotted-gradient/spinner-circle-dotted-gradient.component';
import { SpinnerCircleDottedGradientSlowComponent } from './spinner-circle-dotted-gradient-slow/spinner-circle-dotted-gradient-slow.component';
import { SpinnerCircleGradientComponent } from './spinner-circle-gradient/spinner-circle-gradient.component';
import { SpinnerCircleGradientSlowComponent } from './spinner-circle-gradient-slow/spinner-circle-gradient-slow.component';
import { SpinnerCircleSolidComponent } from './spinner-circle-solid/spinner-circle-solid.component';
import { SpinnerLinesVerticalComponent } from './spinner-lines-vertical/spinner-lines-vertical.component';
import { SpinnerSingleDottedLineComponent } from './spinner-single-dotted-line/spinner-single-dotted-line.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SpinnerCircleDottedComponent,
        SpinnerCircleDottedGradientComponent,
        SpinnerCircleDottedGradientSlowComponent,
        SpinnerCircleGradientComponent,
        SpinnerCircleGradientSlowComponent,
        SpinnerCircleSolidComponent,
        SpinnerLinesVerticalComponent,
        SpinnerSingleDottedLineComponent
    ],
    exports: [
        // SpinnerCircleDottedComponent,
        SpinnerCircleDottedGradientComponent,
        SpinnerCircleDottedGradientSlowComponent,
        SpinnerCircleGradientComponent,
        SpinnerCircleGradientSlowComponent,
        SpinnerCircleSolidComponent,
        SpinnerLinesVerticalComponent,
        SpinnerSingleDottedLineComponent
    ]
})
export class SpinnerModule { }
