import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCine';
  accion: string = '';

  sala: Array<Array<boolean>> = [[]];

  ngOnInit() {
    for (let i = 0; i < 5; i++) {
      this.sala.push([])
      for (let j = 0; j < 5; j++) {
        this.sala[i][j] = false;
      }
    }
    this.sala.pop();
  }

  cambiarAccion(parametro: string) {
    this.accion = parametro
  }

  cambioEstado(fila:number, columna:number){
    /*
    if(this.accion == 'comprar'){
      this.sala[fila][columna] = true;
    }
    if(this.accion == 'cancelar'){
      this.sala[fila][columna] = false;
    }
  */

  this.sala[fila][columna]=  !this.sala[fila][columna]


  }

}