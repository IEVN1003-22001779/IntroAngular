import { Component } from '@angular/core';

@Component({
  selector: 'app-palindromo',
  standalone: false,
  styleUrl: './palindromo.css',
  templateUrl: './palindromo.html',
})
export class Palindromo {
  texto: string = '';
  vocales: number = 0;
  consonantes: number = 0;
  resultado: string = '';

  analizarFrase(): void {
    this.vocales = 0;
    this.consonantes = 0;
    
    let textoDado = "";
    let textoInvertido = "";
    let textoFin = this.texto + "*";
    let termino = 0;

    for (let i = 0; termino == 0; i++) {
      let letra = textoFin[i];
      if (letra == "*") { 
        termino = 1; 
      } else {
        let esVocal = 0;
        let letraNormal = letra; 

        switch (letra) {
          case 'a':
            letraNormal = 'a';
            this.vocales++;
            esVocal = 1;
            break;
          case 'e':
            letraNormal = 'e';
            this.vocales++;
            esVocal = 1;
            break;
          case 'i':
            letraNormal = 'i';
            this.vocales++;
            esVocal = 1;
            break;
          case 'o':
            letraNormal = 'o';
            this.vocales++;
            esVocal = 1;
            break;
          case 'u':
            letraNormal = 'u';
            this.vocales++;
            esVocal = 1;
            break;
        }

        if (esVocal == 1) {
          textoDado = textoDado + letraNormal;
          textoInvertido = letraNormal + textoInvertido;
        } 
        else {
          let esConsonante = 0;
          switch (letra) {
            case 'b': letraNormal = 'b'; esConsonante = 1; break;
            case 'c': letraNormal = 'c'; esConsonante = 1; break;
            case 'd': letraNormal = 'd'; esConsonante = 1; break;
            case 'f': letraNormal = 'f'; esConsonante = 1; break;
            case 'g': letraNormal = 'g'; esConsonante = 1; break;
            case 'h': letraNormal = 'h'; esConsonante = 1; break;
            case 'j': letraNormal = 'j'; esConsonante = 1; break;
            case 'k': letraNormal = 'k'; esConsonante = 1; break;
            case 'l': letraNormal = 'l'; esConsonante = 1; break;
            case 'm': letraNormal = 'm'; esConsonante = 1; break;
            case 'n': letraNormal = 'n'; esConsonante = 1; break;
            case 'ñ': letraNormal = 'ñ'; esConsonante = 1; break;
            case 'p': letraNormal = 'p'; esConsonante = 1; break;
            case 'q': letraNormal = 'q'; esConsonante = 1; break;
            case 'r': letraNormal = 'r'; esConsonante = 1; break;
            case 's': letraNormal = 's'; esConsonante = 1; break;
            case 't': letraNormal = 't'; esConsonante = 1; break;
            case 'v': letraNormal = 'v'; esConsonante = 1; break;
            case 'w': letraNormal = 'w'; esConsonante = 1; break;
            case 'x': letraNormal = 'x'; esConsonante = 1; break;
            case 'y': letraNormal = 'y'; esConsonante = 1; break;
            case 'z': letraNormal = 'z'; esConsonante = 1; break;
          }

          if (esConsonante == 1) {
            this.consonantes++;
            textoDado = textoDado + letraNormal;
            textoInvertido = letraNormal + textoInvertido;
          }
        }
      }
    }

    if (textoDado == "") {
      this.resultado = "Ingresa tu palabra.";
    } else if (textoDado == textoInvertido) {
      this.resultado = "Esta palabra sí es un palíndromo.";
    } else {
      this.resultado = "La palabra que ingresaste no es un palíndromo.";
    }
  }
}