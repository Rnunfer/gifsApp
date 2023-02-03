import { Component, Injectable } from '@angular/core';


@Injectable()
export class GifsService {

  private _historial: number[] = [];

  agregarAHistorial(busqueda:number) {
    this._historial.push(busqueda);
    console.log(this._historial);
  }
}
