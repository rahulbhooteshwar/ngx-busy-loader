import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


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
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
