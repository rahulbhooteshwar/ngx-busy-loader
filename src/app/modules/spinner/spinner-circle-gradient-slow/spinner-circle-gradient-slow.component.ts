import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';

import * as is from 'is_js';

@Component({
    selector: 'ngx-spinner-circle-gradient-slow',
    templateUrl: './spinner-circle-gradient-slow.component.html',
    styleUrls: ['./spinner-circle-gradient-slow.component.css']
})
export class SpinnerCircleGradientSlowComponent implements OnInit, OnChanges {

    @Input() color: string;
    @Input() size: string;
    standardSizes = {
        'xs': '3em',
        'sm': '5em',
        'md': '9em',
        'lg': '20em',
        'xl': '25em',
    };
    spinnerStyle;
    constructor() { }

    ngOnInit() {
        this.setStyle();

    }

    ngOnChanges(changes: SimpleChanges) {
        const color = changes.color;
        const size = changes.size;
        if ((color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    }

    setStyle() {
        this.color = this.color ? this.color : '#fb3c6b';
        this.spinnerStyle = {
            'background': `linear-gradient(to right, ${this.color} 10%, rgba(255,128,0, 0) 42%)`
        };
        if (is.chrome() || is.safari()) {
            this.spinnerStyle['background'] = `-webkit-linear-gradient(left, ${this.color} 10%, rgba(255,128,0, 0) 42%)`;
        } else if (is.firefox()) {
            this.spinnerStyle['background'] = `-moz-linear-gradient(left, ${this.color} 10%, rgba(255,128,0, 0) 42%)`;
        } else if (is.opera()) {
            this.spinnerStyle['background'] = `-o-linear-gradient(left, ${this.color} 10%, rgba(255,128,0, 0) 42%)`;
        } else if (is.ie()) {
            this.spinnerStyle['background'] = `-ms-linear-gradient(left, ${this.color} 10%, rgba(255,128,0, 0) 42%)`;
        }

        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['height'] = this.standardSizes[this.size];
            this.spinnerStyle['width'] = this.standardSizes[this.size];
        } else {
            this.spinnerStyle['height'] = this.standardSizes.md;
            this.spinnerStyle['width'] = this.standardSizes.md;
        }
    }

}
