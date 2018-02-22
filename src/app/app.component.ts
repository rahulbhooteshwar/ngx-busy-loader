import { Component } from '@angular/core';

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
}
