import { Component, Injectable } from '@angular/core';


@Injectable()
export class GifsService {

  private _historial: string[] = [];

  agregarAHistorial(busqueda:string) {
    this._historial.push(busqueda);
    console.log(this._historial);
  }

  get historial(): string[] {
    return [...this._historial];
  }
}
