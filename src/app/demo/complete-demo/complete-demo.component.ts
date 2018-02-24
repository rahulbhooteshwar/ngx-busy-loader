import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ngx-complete-demo',
    templateUrl: './complete-demo.component.html',
    styleUrls: ['./complete-demo.component.css']
})
export class CompleteDemoComponent implements OnInit {

    demoColors = [
        '#80e062',
        '#8081ff',
        '#fa820a',
        '#400080',
        '#fb3ce8',
        '#fb3c6b',
        '#808000'
    ];
    demoText =
        `
        <ngx-spinner-circle-gradient></ngx-spinner-circle-gradient>\n
        <ngx-spinner-circle-gradient-slow></ngx-spinner-circle-gradient-slow>\n
        <ngx-spinner-circle-solid></ngx-spinner-circle-solid>\n
        <ngx-spinner-circle-dotted-gradient></ngx-spinner-circle-dotted-gradient>\n
        <ngx-spinner-circle-dotted-gradient-slow></ngx-spinner-circle-dotted-gradient-slow>\n
        <ngx-spinner-single-dotted-line></ngx-spinner-single-dotted-line>\n
        <ngx-spinner-lines-vertical></ngx-spinner-lines-vertical>\n\n\n
        You can pass input properties for customization, as shown below:\n\n
        <ngx-spinner-lines-vertical [color]="'some_color_or_hash'" [size]="'some_size_from_available_ones'"></ngx-spinner-lines-vertical>\n\n
        Available sizes: xl, lg, md, sm, xs\n
        You can pass dynamic values as input binding as well.\n
        `;
    overlayDemoText =
        `
        Pass overlay input as true to show the spinner as overlay on the full page:
        <ngx-spinner-lines-vertical [overlay]="true" [color]="'some_color_or_hash'" [size]="'some_size_from_available_ones'"></ngx-spinner-lines-vertical>\n\n
        * Optionally you can pass overlayColor property for background color:
        <ngx-spinner-lines-vertical [overlay]="true" [overlayColor]="'#80e06242'"[color]="'some_color_or_hash'" [size]="'some_size_from_available_ones'"></ngx-spinner-lines-vertical>\n\n
        NOTE: Try to pass transparent color as overlay color for better user experience
        `;

    constructor() { }

    ngOnInit() {
    }

}
