import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion-usuario',
  standalone: false,
  styleUrl: './validacion-usuario.css',
  templateUrl: './validacion-usuario.html',
})
export class ValidacionUsuario {
  usuario: string = '';
  contrasena: string = '';
  mensaje: string = '';
  usuarioVeri: string = 'LGCP'; //es el usuario correcto que se debe ingresar.
  contrasenaVeri: string = '117'; //es la contraseña correcta que se debe ingresar.
      // en una operación el "<" es menor que, el ">" es mayor que, el "==" es igual a, el "!=" es diferente a, el "<=" es menor o igual a, y el ">=" es mayor o igual a.
  iniciarSesion(): void {
    
    if (this.usuario != this.usuarioVeri) {
      this.mensaje = "El usuario no es válido.";   // Indica que el nombre de usuario ingresado no es el correcto.
    } 

    else if (this.contrasena != this.contrasenaVeri) { // Dice que la contraseña ingresada no es la correcta.
      this.mensaje = "La contraseña no es válida.";
    } 

    else {
      this.mensaje = "Bienvenido de nuevo " + this.usuario;  // De lo contrario, si el usuario y la contraseña son correctos, se muestra el mensaje.
    }
  }
}