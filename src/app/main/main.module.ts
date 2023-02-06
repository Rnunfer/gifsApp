import { Component, NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { HttpTestComponent } from './http-test/http-test.component';
import { FormsModule } from '@angular/forms';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    MainComponent,
    HttpTestComponent,
    BarraBusquedaComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [

  ]
})
export class MainModule {}
