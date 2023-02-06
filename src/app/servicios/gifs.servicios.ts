import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { gif, Gifresponse } from '../main/http-test/http-test.interface';


@Injectable()
export class GifsService {

  private _resultados: gif [] = [];
  private _historial: string[] = [];

  constructor(private http:HttpClient) {
    this._historial = JSON.parse(localStorage.getItem("historial")!) || [];
    this._resultados = JSON.parse(localStorage.getItem("resultados")!) || [];
  }

  buscar(busqueda: string, limite: number) {
    this.agregarAHistorial(busqueda);

    this.http.get<Gifresponse>("https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=" + busqueda +"&limit=" + limite)
      .subscribe({
        next:(resp)=>{
          this._resultados = resp.data;
          localStorage.setItem("resultados", JSON.stringify(this._resultados));
          console.log(this.resultados)
        }
    })

  }

  agregarAHistorial(busqueda:string) {
    if (this._historial.includes(busqueda)) {
      console.log("Elemento ya en el historial")
    } else {
      this._historial.unshift(busqueda);
      this._historial.splice(10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
      console.log("Elemento " + busqueda + " introducido en el historial")
    }
  }

  borrarHistorial() {
    this._historial = [];
    localStorage.setItem("historial", JSON.stringify(this._historial));
  }

  get historial(): string[] {
    return [...this._historial];
  }

  get resultados(): gif[] {
    return [...this._resultados];
  }
}
