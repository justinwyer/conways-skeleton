import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DisplayComponent } from './display/display.component';
import { DisplayService } from './display/display.service';

@NgModule({
  declarations: [
    DisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DisplayService],
  bootstrap: [DisplayComponent]
})
export class AppModule { }
