import { Component, OnInit } from '@angular/core';
import { Fruta } from '../../model/fruta';
import { FrutaService } from '../../providers/fruta.service';

@Component({
  selector: 'app-comparador',
  templateUrl: './comparador.component.html',
  styleUrls: ['./comparador.component.scss']
})
export class ComparadorComponent implements OnInit {
  todas:boolean;
  textoFiltro:string;

  frutas:Fruta[];
  f1:Fruta;
  f2:Fruta;
  

  //Carro compra
  totalCompra:number;
  productos:Fruta[];
  frutaCompra:Fruta;
  frutaBuscar:Fruta;
  cant:number;

  /*FrutaService es @Injectable por lo cual debemos declararlo en el constructor,
   nunca haremos NEW y no usarlo dentro del constructor , mejor en ngOnInit
   */
  constructor(public frutaService:FrutaService) {
    this.frutas = [];
    this.f1=new Fruta();
    this.f2=new Fruta();     

    this.totalCompra=0;
    this.productos=[];
    this.frutaCompra=new Fruta();
    this.frutaBuscar=new Fruta();
    this.cant=1;

    this.todas=true;
    this.textoFiltro="Todas";
   }

  ngOnInit() {
    console.trace("comparador init");    
    this.frutaService.getAll().subscribe(data=>{

      this.frutas=data.map(el=>el);
      this.f1=this.frutas[0];
    this.f2=this.frutas[1];
    })
  }

  filtrar(){    
    this.todas =!this.todas;
    console.log("ComparadorComponent todas:" + this.todas);
    this.textoFiltro=(this.todas)?'Todas':'En Oferta';
  }

  cargarFruta(fruta:Fruta){
    console.trace("click cargarFruta comparador",fruta);
    
    this.f2 = this.f1;
    this.f1 = fruta;
  }

  actualizarCarro(event:Event){
    console.debug("ComparadorComponent actualizarCarro recibimos elemento del componente hijo");
    console.debug("Parametro frutaClick= %o" ,event['frutaClick']);
   
    this.frutaCompra = event['frutaClick'];
    //this.totalCompra += this.frutaCompra.precio * this.cant;
    if(this.frutaCompra.oferta){
      this.totalCompra = this.totalCompra + (this.frutaCompra.precio - ((this.frutaCompra.precio * this.frutaCompra.descuento)/100));
    }else{
      this.totalCompra = this.totalCompra + (this.frutaCompra.precio * this.frutaCompra.cantidad);  
    }
    //Buscamos la fruta en el array
    this.frutaBuscar=this.productos.find(el => el.nombre===this.frutaCompra.nombre);
    
    if (this.frutaBuscar !== undefined) {
      //Si existe en productos añadimos cantidad
      
      //Buscamos posicion de la fruta 
      const posicion = this.productos.indexOf(this.frutaBuscar);
      //Cambiamos la cantidad     

      this.frutaBuscar.cantidad += 1;
      //machacamos el objeto de la posicion con la cantidad actualizada
      this.productos[posicion]=this.frutaBuscar;
    }else{
      //Si no agregamos objeto Fruta
      this.productos.push(this.frutaCompra);
      } 
  }

  cantidadResta(p: Fruta, i: number){
    if ( p.cantidad > 1 ){
      p.cantidad--;
      this.productos[i] = p;
      if(p.oferta){
        this.totalCompra = this.totalCompra - (p.precio - ((p.precio * p.descuento)/100));
      }else{
        this.totalCompra = this.totalCompra - p.precio ;  
      }
    }else if(p.cantidad == 1){
      if(p.oferta){
        this.totalCompra = this.totalCompra - (p.precio - ((p.precio * p.descuento)/100));
      }else{
        this.totalCompra = this.totalCompra - p.precio ;  
      }
    }
  }

  cantidadSuma(p: Fruta, i: number){
    p.cantidad++;
    this.productos[i] = p;
    //this.totalCompra += p.precio * this.cant;
    if(p.oferta){
      this.totalCompra = this.totalCompra + (p.precio - ((p.precio * p.descuento)/100));
    }else{
      this.totalCompra = this.totalCompra + p.precio ;  
    }
  }

  eliminarProducto(p: Fruta, index: number){
    if(p.oferta){
      this.totalCompra = this.totalCompra -((p.precio - ((p.precio *p.descuento)/100))*p.cantidad);
    }else{
      this.totalCompra = this.totalCompra - (p.precio * p.cantidad);  
    }
     
    p.cantidad = 1;    
    let posicion: number;
    posicion = this.productos.indexOf(p);

    this.productos.splice(posicion , 1);
  }

  cancelarCompra(){
    this.productos=[];
    this.totalCompra=0;
  }
  

}
