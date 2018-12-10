import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fruta } from '../model/fruta';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrutaService {
 
  endpoint: string = 'http://localhost:3000/frutas';
  
  constructor(public http: HttpClient ) { 
    console.log("FrutaService constructor");
   }
  
  getAll(): Observable<any> {
    console.trace(`FrutaService getAll ${this.endpoint}`);
    return this.http.get( this.endpoint);
  } 
  
  add(fruta:Fruta):Observable<any>{
    console.log("add frutaService %o" ,fruta);
    let body = {
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "colores": [
        fruta.colores
      ],
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen,
      "cantidad": fruta.cantidad
    };
 
    const httpOptions = {
     headers: new HttpHeaders({
       'Content-Type':  'application/json'
     })
   }; 
     return this.http.post(this.endpoint,body,httpOptions);
   }

   delete(id:number): Observable<any> {
    
    let uri=this.endpoint +"/" +id;
    console.log(`frutAService delete :${uri}`);   

    return this.http.delete(uri);
  }
  

  getById(id:number):Observable<any> {
    
    let uri=this.endpoint +"/" +id;
    console.trace(`frutaService getById ${uri}`);   
    return this.http.get( uri );
  }

  update(fruta : Fruta): Observable <any>{
    console.log("Modifcar frutaService %o"+fruta);
    const uri = this.endpoint + '/' + fruta.id;

    let body = {
      "nombre": fruta.nombre,
      "precio": fruta.precio,
      "calorias": fruta.calorias,
      "colores": [
        fruta.colores
      ],
      "oferta": fruta.oferta,
      "descuento": fruta.descuento,
      "imagen": fruta.imagen,
      "cantidad": fruta.cantidad
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Context-Type': 'application/json'
      })
      
    };
    
    return this.http.put(uri,body);
    
  }
}
