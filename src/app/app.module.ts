import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { SpinnerModule } from './modules/spinner/spinner.module';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        SpinnerModule,
        FormsModule,
        ModalModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
