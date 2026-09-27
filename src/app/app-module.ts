import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HeroesList } from './heroes/heroes-list/heroes-list';
import { FormsModule } from '@angular/forms';
import { HeroesFilterPipe } from './heroes/heroes-filter-pipe';
import { OperasBas } from './formularios/operas-bas/operas-bas';
import { Distancia } from './distancia/distancia';
import { Figuras } from './formularios/figuras/figuras';
import { Palindromo } from './formularios/palindromo/palindromo';
import { ValidacionUsuario } from './formularios/validacion-usuario/validacion-usuario';
import { TrianguloPuntos } from './formularios/triangulo-puntos/triangulo-puntos';

@NgModule({
  declarations: [
    App,
    HeroesList,
    HeroesFilterPipe,
    OperasBas,
    Distancia,
    Figuras,
    Palindromo,
    ValidacionUsuario,
    TrianguloPuntos,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
