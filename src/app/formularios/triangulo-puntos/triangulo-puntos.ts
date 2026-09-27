import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo-puntos',
  standalone: false,
  styleUrl: './triangulo-puntos.css',
  templateUrl: './triangulo-puntos.html',
})
export class TrianguloPuntos {
  x1: number = 0;
  x2: number = 0;
  x3: number = 0;
  y1: number = 0;
  y2: number = 0;
  y3: number = 0;
  area: number = 0;
  resultado: string = '';
  triangulo: string = '';
  calculo: boolean = false;

  puntos(): void {
    this.calculo = true; 

    let determinante = (this.x1 * (this.y2 - this.y3)) + (this.x2 * (this.y3 - this.y1)) + (this.x3 * (this.y1 - this.y2));
    determinante = determinante / 2; // Fórmula para el área del triángulo

    if (determinante == 0) {
      this.area = 0;
      this.resultado = "Los tres puntos no forman un triángulo porque son colineales.";
      this.triangulo = "";
    } else {
      this.area = determinante;
      this.resultado = "Los puntos forman un triángulo.";
    }
  }
}