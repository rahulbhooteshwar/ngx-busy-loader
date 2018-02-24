import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ngx-spinner-circle-solid',
    templateUrl: './spinner-circle-solid.component.html',
    styleUrls: ['./spinner-circle-solid.component.css']
})
export class SpinnerCircleSolidComponent implements OnInit, OnChanges {

    @Input() color: string;
    @Input() size: string;
    @Input() overlay: boolean;
    @Input() overlayColor: string;
    standardSizes = {
        'xs': '3em',
        'sm': '5em',
        'md': '9em',
        'lg': '20em',
        'xl': '25em',
    };
    spinnerStyle;
    overlayStyle;
    constructor() { }

    ngOnInit() {
        this.setStyle();

    }

    ngOnChanges(changes: SimpleChanges) {
        const color = changes.color;
        const size = changes.size;
        if ((color && color.previousValue && color.previousValue != color.currentValue && !color.firstChange) || (size && size.previousValue && size.previousValue != size.currentValue && !size.firstChange)) {
            this.setStyle();
        }
    }

    setStyle() {
        this.color = this.color ? this.color : '#fb3c6b';
        this.spinnerStyle = {
            'background': this.color
        };

        this.overlayColor = this.overlayColor ? this.overlayColor : '#fefefee8';
        this.overlayStyle = {
            'background-color': this.overlayColor
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
