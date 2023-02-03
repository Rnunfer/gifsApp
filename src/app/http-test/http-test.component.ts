import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gifresponse, gif } from './http-test.interface';
import { GifsService } from '../servicios/gifs.servicios';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styles: [
  ]
})
export class HttpTestComponent {

@ViewChild('txtquery') txtquery!:ElementRef<HTMLInputElement>;

  limite: number = 10;
  resultados: gif [] = [];
  constructor(private http:HttpClient, private gifsService: GifsService ){}

    buscar(txt:HTMLInputElement) {
      console.log(txt.value);

      this.http.get<Gifresponse>("https://api.giphy.com/v1/gifs/search?api_key=yGhLOEEGIflLvexLsJEHF2xHpNRqIh8j&q=" + txt.value +"&limit=" + this.limite)
      .subscribe({
        next:(resp)=>{
          this.resultados = resp.data;
          console.log(this.resultados)
        }
      })
      //txt.value = '';
    }

    limiteGif(limite:number) {
      this.limite = limite;
    }

    agregarAHistorial(a:number) {
      this.gifsService.agregarAHistorial(a);
    }
}
