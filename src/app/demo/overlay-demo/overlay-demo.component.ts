import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ngx-overlay-demo',
    templateUrl: './overlay-demo.component.html',
    styleUrls: ['./overlay-demo.component.css']
})
export class OverlayDemoComponent implements OnInit {
    type: string;
    constructor(public activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        const type = this.activatedRoute.snapshot.paramMap.get('type');
        this.type = type ? type : 'ngx-spinner-circle-gradient';
    }

}
