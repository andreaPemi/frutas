import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Fruta } from '../../model/fruta';

@Component({
  selector: 'app-fruta-card',
  templateUrl: './fruta-card.component.html',
  styleUrls: ['./fruta-card.component.scss']
})
export class FrutaCardComponent implements OnInit {
  
  _fruta: Fruta;
  private _fruta2?: Fruta; // ?=opcional,puede llegar
  

  public get fruta(): Fruta {
    return this._fruta;
  }
  //en caso de que una fruta venga null
  @Input('_fruta')public set fruta(value: Fruta) {
    if(value){
      this._fruta = value;
    }else{
      this.fruta=new Fruta();
    }
    
  }

  public get fruta2(): Fruta {
    return this._fruta2;
  }
  @Input ('_fruta2')public set fruta2(value: Fruta) {
    this._fruta2 = value;
  }
  
  //registrar evento de salida
  @Output() clickCompra=new EventEmitter();

  constructor() {
    console.trace('Constructor FrutaCardComponent');
    /*this.fruta = new Fruta();
    this.fruta.nombre = 'Melocotón';
    this.fruta.calorias = 17.4;
    this.fruta.precio = 100;
    this.fruta.oferta = true;
    this.fruta.descuento = 20;
    this.fruta.imagen = 'https://www.frutadelasarga.com/server/Portal_0008706/img/products/melocoton-de-cieza_1677407.jpg';
    */
  }

  ngOnInit() {
    console.trace('ngOnInit FrutaCardComponent');
  }

  comprar() {
    console.trace('Comprar de FrutaCardComponent');
    //alert(`Lo sentimos pero no tenemos esta opción habilidada ${this.fruta.nombre}`);
   
    //Emitimos el evento al componente padre  y enviamos parametro FrutaClick
    this.clickCompra.emit({frutaClick:this.fruta});
  }

 

}
