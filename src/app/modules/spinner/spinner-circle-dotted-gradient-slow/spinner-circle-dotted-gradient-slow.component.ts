import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ngx-spinner-circle-dotted-gradient-slow',
    templateUrl: './spinner-circle-dotted-gradient-slow.component.html',
    styleUrls: ['./spinner-circle-dotted-gradient-slow.component.css']
})
export class SpinnerCircleDottedGradientSlowComponent implements OnInit, OnChanges {

    @Input() color: string;
    @Input() size: string;
    standardSizes = {
        'xs': '25px',
        'sm': '35px',
        'md': '45px',
        'lg': '70px',
        'xl': '100px',
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
            'color': this.color
        };

        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.spinnerStyle['font-size'] = this.standardSizes[this.size];
        } else {
            this.spinnerStyle['font-size'] = this.standardSizes.md;
        }
    }

}
