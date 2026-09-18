import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-distancia',
  standalone: false,
  styleUrl: './distancia.css',
  templateUrl: './distancia.html',
})
export class Distancia {
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;
  
  resultado: number = 0;

  calcularDistancia(): void {
    let X = this.x2 - this.x1;
    let Y = this.y2 - this.y1;

    this.resultado = Math.sqrt(Math.pow(X, 2) + Math.pow(Y, 2));
  }
}