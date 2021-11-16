import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ExampleComponent} from "./example.component";
import {MultipleComponent} from "./multiple.component";

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    MultipleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
