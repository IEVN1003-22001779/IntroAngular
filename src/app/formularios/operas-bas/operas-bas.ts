import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operas-bas',
  standalone: false,
  styleUrl: './operas-bas.css',
  templateUrl: './operas-bas.html',
})
export class OperasBas {
  num1: string = '';
  num2: string = '';
  resultado: number = 0;
  
  operacion: string = 'sumar'; 

  calcular(): void {
    switch(this.operacion) {
      case 'sumar':
        this.resultado = parseInt(this.num1) + parseInt(this.num2);
        break;
      case 'restar':
        this.resultado = parseInt(this.num1) - parseInt(this.num2);
        break;
      case 'multiplicar':
        this.resultado = parseInt(this.num1) * parseInt(this.num2);
        break;
      case 'dividir':
        this.resultado = parseInt(this.num1) / parseInt(this.num2);
        break;
    }
  }

  sumar(): void {
    this.resultado = parseInt(this.num1) + parseInt(this.num2);
  }
  restar(): void {
    this.resultado = parseInt(this.num1) - parseInt(this.num2);
  }
  multipliicar(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  }
  dividir(): void {
    this.resultado = parseInt(this.num1) / parseInt(this.num2);
  }
}