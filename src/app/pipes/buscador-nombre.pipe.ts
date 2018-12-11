import { Pipe, PipeTransform } from '@angular/core';
import { Fruta } from '../model/fruta';

@Pipe({
  name: 'buscadorNombre'
})
export class BuscadorNombrePipe implements PipeTransform {

  transform(value: any, nombre: string): any {
    
    if(nombre != undefined){
      return value.filter(el=>el.nombre.toLocaleLowerCase().indexOf(nombre)!= -1);
    }else{
      return value;
    }
    
  }

}
