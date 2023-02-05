import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GifsService } from './servicios/gifs.servicios';

@NgModule({
  declarations: [
  AppComponent,
  BarraBusquedaComponent,
  HttpTestComponent,
  SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
