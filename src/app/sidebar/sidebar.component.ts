import { Component } from '@angular/core';
import { GifsService } from '../servicios/gifs.servicios';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(private gifsService: GifsService) {}

  get historial() {
    return this.gifsService.historial;
  }

  buscar(busqueda: string, limite: number) {
    console.log("Búsqueda: " + busqueda + " Límite: " + limite)
    this.gifsService.buscar(busqueda, limite);
  }

  borrarHistorial() {
    this.gifsService.borrarHistorial();
  }
}
