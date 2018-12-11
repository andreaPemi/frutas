import { Component, OnInit } from '@angular/core';
import { FrutaService } from '../../providers/fruta.service';
import { Fruta } from '../../model/fruta';
import { FormGroup, FormControl, Validators,FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-crud-fruta',
  templateUrl: './crud-fruta.component.html',
  styleUrls: ['./crud-fruta.component.scss']
})
export class CrudFrutaComponent implements OnInit {

  frutas:Fruta[];  

  constructor(public frutaService:FrutaService ,private route: ActivatedRoute) { 
    this.frutas=[];
  }

  ngOnInit() {
    //listar
    this.cargarLista();    
  }

  cargarLista(){

    this.frutaService.getAll().subscribe(data => {
      console.log('Datos recibidos $%o', data);
      this.frutas = data.map(el => el);
    });

  }

  eliminar(id:number){
    console.log('index a borrar: ', id);
    this.frutaService.delete(id).subscribe(data =>{
      console.log('data %o', data);
      this.cargarLista();
      });

  }

}
