import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CompleteDemoComponent } from './demo/complete-demo/complete-demo.component';
import { OverlayDemoComponent } from './demo/overlay-demo/overlay-demo.component';


@NgModule({
    declarations: [
        AppComponent,
        CompleteDemoComponent,
        OverlayDemoComponent
    ],
    imports: [
        BrowserModule,
        SpinnerModule,
        FormsModule,
        ModalModule.forRoot(),
        RouterModule.forRoot([
            {
                path: '',
                component: CompleteDemoComponent
            },
            {
                path: 'overlay-demo/:type',
                component: OverlayDemoComponent
            },
            {
                path: '**',
                redirectTo: ''
            }
        ], { useHash: true })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
