import { Component } from '@angular/core';
import { RespuestaBusquedaPais } from '../../interfaces/busquedaPaises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor : pointer;
      }
    `
  ]
})
export class PorPaisComponent {

  constructor(private paisService : PaisService) { }

  termino  : string  = '';
  hayError : boolean = false;
  paises   : RespuestaBusquedaPais[] = [];
  paisesSugeridos : RespuestaBusquedaPais[] = [];
  mostrarSugerencia : boolean = false;

  /**Termino que viene del input */
  buscar( terminoParam : string ){
    this.hayError = false;
    this.termino = terminoParam;
    this.mostrarSugerencia = false;
    /**Por si solo el llamado no es suficiente, necesitamos el suscribe() sin embargo
     * optamos por no hacerlo en el service, entonces debemos hacerlo acá. El suscribe
     * tiene el argumento de respuesta correcta, pero también como segundo argumento podemos
     * capturar el error.
     */
    this.paisService.buscarPais(this.termino)
      .subscribe( (respuestaPaises) => {
        console.log(respuestaPaises);
        this.paises = respuestaPaises;
    }, (error => {
      console.warn('Error => ');
      console.warn(error);
      this.hayError = true;
      this.paises   = [];
    }));
  }

  sugerencias( termino : string ){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencia = true;

    this.paisService.buscarPais(termino)
      .subscribe( paises => this.paisesSugeridos = paises.slice(0,5),
      (error) => {
        console.log(error);
        this.paisesSugeridos = []
        this.hayError = false;
      }
    )}

    buscarSugerido( termino : string ){
      this.buscar(termino);
    }

}
