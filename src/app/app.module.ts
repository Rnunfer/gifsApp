import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GifsModule } from './gifs/gifs.module';
import { SharedComponent } from './shared/shared.component';

@NgModule({
  declarations: [
  AppComponent,
  SharedComponent
  ],
  imports: [
    BrowserModule,
    GifsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
