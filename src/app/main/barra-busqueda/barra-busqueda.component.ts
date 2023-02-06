import { Component } from '@angular/core';
import { GifsService } from '../../servicios/gifs.servicios';

@Component({
  selector: 'app-barra-busqueda',
  templateUrl: './barra-busqueda.component.html',
  styleUrls: ['./barra-busqueda.component.scss']
})
export class BarraBusquedaComponent {

  busqueda: string = "";
  limite: number = 10;

  constructor(private gifsService: GifsService) {}

  buscar(busqueda: string, limite: number) {
    console.log("Búsqueda: "+ busqueda + "  Límite: " + limite);
    if (busqueda.length != 0)
      this.gifsService.buscar(busqueda, limite);
  }
}
