import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Tabs} from './tabs';
import {Tab} from './tab';

@NgModule({
  declarations: [
    AppComponent,
    Tabs,
    Tab
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
