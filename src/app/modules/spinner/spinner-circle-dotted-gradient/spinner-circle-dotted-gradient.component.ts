import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ngx-spinner-circle-dotted-gradient',
    templateUrl: './spinner-circle-dotted-gradient.component.html',
    styleUrls: ['./spinner-circle-dotted-gradient.component.css']
})
export class SpinnerCircleDottedGradientComponent implements OnInit, OnChanges {

    @Input() color: string;
    @Input() size: string;
    standardSizes = {
        'xs': '5px',
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
        'xl': '25px',
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
        this.color = this.color ? this.color : '#ff8000';
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