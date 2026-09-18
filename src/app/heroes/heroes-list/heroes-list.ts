import { Component } from '@angular/core';
import {IHeroe} from '../heroe';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

    imageWidth:number=40;
    imageMargin:number=2;
    muestraImagen:boolean=true;
    listFilter:string='';
    showImage():void{
      this.muestraImagen=!this.muestraImagen;
    }

  heroes:any[]=[
    {
      imagen:"https://dragonball-api.com/characters/goku_normal.webp",
      nombre:'Goku',
      descripcon:'Kame hame Ha',
      race:'Sayan',
      ki:9000
    },
    {
      imagen:"https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre:'Vegeta',
      descripcon:'Final Flash',
      race:'Sayan',
      ki:8500
    },
    {
      imagen:"https://dragonball-api.com/characters/picolo_normal.webp",
      nombre:'Piccolo',
      descripcon:'Makankosappo',
      race:'Namekiano',
      ki:7000
    },
    {
      imagen:"https://dragonball-api.com/characters/Babidi_Artwork.webp",
      nombre:'Babidi',
      descripcon:'Parapapa',
      race:'Villain',
      ki:0
    }
  ]
}
