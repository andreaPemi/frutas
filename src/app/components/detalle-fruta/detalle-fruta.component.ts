import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FrutaService } from '../../providers/fruta.service';
import { Fruta } from '../../model/fruta';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-detalle-fruta',
  templateUrl: './detalle-fruta.component.html',
  styleUrls: ['./detalle-fruta.component.scss']
})
/**
 * Clase que muestra el detalle de una fruta recogiendo el id 
 * seleccionada desde otro componente "crud-fruta"
 */
export class DetalleFrutaComponent implements OnInit {

  id: number;
  fruta: Fruta;
  formulario: FormGroup;
  colores: FormArray;
  alert: string;

  constructor(public frutaService: FrutaService, private route: ActivatedRoute) {
    this.id = 0;
    this.alert = null;
    this.fruta = new Fruta();
    this.agrupacionInput();
  }

  ngOnInit() {
    let fruta = new Fruta();
    //recoger parameros aqui, No constructor

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      if (this.id >= 1) {
        // llamar provider para conseguir datos a traves del id
        this.frutaService.getById(this.id).subscribe(data => {
          console.log("fruta Data subscrita: %o" + data);
          if (data != undefined) {
            //cargamos formulario con datos del objeto
            this.formulario.controls.nombre.setValue(data.nombre);
            this.formulario.controls.precio.setValue(data.precio);
            this.formulario.controls.calorias.setValue(data.calorias);
            
            //Agregar colores 
            const arrayColores = new FormArray([]) as FormArray;            
            
            data.colores.forEach(c => {
              console.log("color:"+c);
              arrayColores.push(this.crearColorFormGroup(c));
            });
            
            this.formulario.setControl('colores', arrayColores);

            this.formulario.controls.oferta.setValue(data.oferta);
            this.formulario.controls.descuento.setValue(data.descuento);
            this.formulario.controls.imagen.setValue(data.imagen);
            this.formulario.controls.cantidad.setValue(data.cantidad);
          }

        });
      } else {
        //formulario por defecto
        this.vaciarCamposForm();
      }

    });
  }

  agrupacionInput() {
    console.log("agrupacionInput");
    //Agrupacion de controles==formulario
    this.formulario = new FormGroup({
      nombre: new FormControl('',
        [Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)]
      ),
      precio: new FormControl(
        1, //valor inicial
        [Validators.required,
        Validators.min(0.1),
        Validators.max(999)]
      ),
      calorias: new FormControl(
        0,
        [Validators.required,
        Validators.min(0.1),
        Validators.max(999)]),
      colores: new FormArray([this.crearColorFormGroup('')], Validators.minLength(1)),
      oferta: new FormControl(false),
      descuento: new FormControl(
        5,
        [Validators.min(5),
        Validators.max(90)]),
      imagen: new FormControl("", [Validators.required, Validators.pattern('^(http(s?):\/\/).+(\.(png|jpg|jpeg))$')]),
      cantidad: new FormControl(
        0,
        [Validators.min(1),
        Validators.max(999)
        ])
    });
  }

  agregar(id: number) {
    console.log('detalle-fruta agregar/modificar id: ' + id);

    let fruta = new Fruta();

    fruta.nombre = this.formulario.controls.nombre.value;
    fruta.precio = this.formulario.controls.precio.value;
    fruta.calorias = this.formulario.controls.calorias.value;   
    fruta.oferta = this.formulario.controls.oferta.value;
    fruta.descuento = this.formulario.controls.descuento.value;
    fruta.imagen = this.formulario.controls.imagen.value;
    fruta.cantidad = this.formulario.controls.cantidad.value;
    
    const arrayColores = this.formulario.get('colores') as FormArray;

    arrayColores.controls.forEach(color => {
      const colorFormControl = color.value.color;
      fruta.colores.push(colorFormControl);
      console.log('formControlColor', color);
    });

    //modificamos fruta existente
    if (id >= 1) {
      fruta.id = id;

      this.frutaService.update(fruta).subscribe(data => {
        //console.debug(data);

        this.vaciarCamposForm();
        this.alert = fruta.nombre + " modificada correctamente";

      });
      //Creamos nueva fruta
    } else {
      this.frutaService.add(fruta).subscribe(data => {
        //console.debug(data);
        
        this.alert = "Fruta agregada correctamente";
      });
    }
  }

  crearColorFormGroup(nombre: string): FormGroup {
    console.log('GestionFrutasComponent crearColorFormGroup');
    return new FormGroup({
      color: new FormControl(
        nombre,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ])
    });
  }

  nuevoColor(nombre: string) {
    console.log('GestionFrutasComponent nuevoColor');
    const arrayColores = this.formulario.get('colores') as FormArray;
    arrayColores.push(this.crearColorFormGroup(nombre));

  }

  eliminarColor(i: number) {
    let arrayColores = this.formulario.get('colores') as FormArray;

    if (arrayColores.length > 1) {
      arrayColores.removeAt(i);
    }

  }

  vaciarCamposForm() {
    this.formulario.controls.nombre.setValue("");
    this.formulario.controls.precio.setValue(0);
    this.formulario.controls.calorias.setValue(0);
    this.formulario.controls.colores.setValue([{color: ''}]);
    this.formulario.controls.oferta.setValue(false);
    this.formulario.controls.descuento.setValue(5);
    this.formulario.controls.imagen.setValue("");
    this.formulario.controls.cantidad.setValue(1);
  }

}
