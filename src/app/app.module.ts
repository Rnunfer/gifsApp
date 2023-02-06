import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GifsService } from './servicios/gifs.servicios';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
  AppComponent,
  SidebarComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
