import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
    selector: 'ngx-spinner-single-dotted-line',
    templateUrl: './spinner-single-dotted-line.component.html',
    styleUrls: ['./spinner-single-dotted-line.component.css']
})
export class SpinnerSingleDottedLineComponent implements OnInit, OnChanges {

    @Input() color: string;
    @Input() size: string;
    @Input() overlay: boolean;
    @Input() overlayColor: string;

    standardSizes = {
        'xs': '5px',
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
        'xl': '30px',
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
        this.overlayColor = this.overlayColor ? this.overlayColor : '#fefefee8';
        this.overlayStyle = {
            'background-color': this.overlayColor
        }
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
