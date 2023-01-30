import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BarraBusquedaComponent } from './barra-busqueda/barra-busqueda.component';
import { GifsMainComponent } from './gifs-main/gifs-main.component';
import { HistorialComponent } from './historial/historial.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { GifsService } from './servicios/gifs.servicios';

@NgModule({
  declarations: [
    BarraBusquedaComponent,
    GifsMainComponent,
    HistorialComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    GifsService
  ]
})
export class GifsModule {}
