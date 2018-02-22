import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ngx-spinner-lines-vertical',
    templateUrl: './spinner-lines-vertical.component.html',
    styleUrls: ['./spinner-lines-vertical.component.css']
})
export class SpinnerLinesVerticalComponent implements OnInit, OnChanges {

    @Input() color: string;
    @Input() size: string;
    fontSize;
    standardSizes = {
        'xs': '5px',
        'sm': '10px',
        'md': '15px',
        'lg': '20px',
        'xl': '30px',
    };
    spinnerStyle;
    constructor(public domSanitizer: DomSanitizer) { }

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

        if (Object.keys(this.standardSizes).indexOf(this.size) > -1) {
            this.fontSize = this.standardSizes[this.size];
        } else {
            this.fontSize = this.standardSizes.md;
        }

    }

}
