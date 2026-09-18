import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  styleUrl: './figuras.css',
  templateUrl: './figuras.html',
})
export class Figuras {
  base: number = 0;
  altura: number = 0;
  opcionDefecto: string = 'cuadrado';
  resultado: number = 0;

  calcular(): void {
    if (this.opcionDefecto === 'cuadrado') { //Los 3 = son para comparar el valor y el tipo de dato
      this.resultado = this.base * this.base;
    } 
    else if (this.opcionDefecto === 'triangulo') {
      this.resultado = (this.base * this.altura) / 2;
    } 
    else if (this.opcionDefecto === 'trapecio') {
      this.resultado = (this.base * this.altura) / 2;
    } 
    else if (this.opcionDefecto === 'pentagono') {
      let perimetro = this.base * 5;
      this.resultado = (perimetro * this.altura) / 2;
    } 
    else if (this.opcionDefecto === 'circulo') {
      this.resultado = Math.PI * (this.base * this.base);
    }
  }
}