# Frutas
Proyecto que recoge todo lo aprendido de angular.
* Componentes.
* Clases.
* Servicios.
* Filtros.
* Y un gran ETC...

## De qué va la App
Cuando arrancamos la APP nos muestra un listado de las frutas que hay en el archivo `db.json`, junto al listado se muestra dos tarjetas comparando con los detalles de cada fruta, pudiendo llenar el carrito de la compra.

Si se desea acceder a la zona privada, hay que loguearse( para facilitar la labor, los datos del nombre de usuario y la contraseña estan hardcodeado).

si te logueas, una de las opciones es acceder a la tabla de fruta, donde se puede borrar, crear y si clicamos en el nombre accedemos a la segunda opcion que nos lleva al formulario para poder modificar.

Y por ultimo como hemos iniciado sesion, nos aparece el botón de cerrar sesion.


# Vamos al lío

## Development server
Este proyecto esta generado con 
 [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

Accedemos a la carpeta donde tenemos guardado el proyecto desde la `consola de comandos`.

Lanzamos este comando `ng serve`. y podemos visualizar la app en   **http: // localhost: 4200 /**. 

Para cargar el array de frutas lanzamos el siguiente comando desde otra consola `json-server --watch db.json`.

La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.


## Code scaffolding
Ejecute `ng generate component component-name` para generar un nuevo componente. También puede usar `ng generate directive|pipe|service|class|guard|interface|enum|module.`

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
