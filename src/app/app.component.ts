import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'ngx-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';
    demoColors = [
        '#80e062',
        '#8081ff',
        '#fa820a',
        '#400080',
        '#fb3ce8',
        '#fb3c6b',
        '#808000'
    ];
    demoList = [
        '<ngx-spinner-circle-gradient></ngx-spinner-circle-gradient>',
        '<ngx-spinner-circle-gradient-slow></ngx-spinner-circle-gradient-slow>',
        '<ngx-spinner-circle-solid></ngx-spinner-circle-solid>',
        '<ngx-spinner-circle-dotted-gradient></ngx-spinner-circle-dotted-gradient>',
        '<ngx-spinner-circle-dotted-gradient-slow></ngx-spinner-circle-dotted-gradient-slow>',
        '<ngx-spinner-single-dotted-line></ngx-spinner-single-dotted-line>',
        '<ngx-spinner-lines-vertical></ngx-spinner-lines-vertical>',
        `
        You can pass input properties for customization, as shown below:
        <ngx-spinner-lines-vertical [color]="'some_color_or_hash'" [size]="'some_size_from_available_ones'"></ngx-spinner-lines-vertical>
        Available sizes: xl, lg, md, sm, xs
        You can pass dynamic values as input binding as well.
        `

    ];
    constructor(public domSanitizer: DomSanitizer) {
    }
}
