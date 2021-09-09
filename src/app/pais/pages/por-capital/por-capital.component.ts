import { Component, OnInit } from '@angular/core';
import { RespuestaBusquedaPais } from '../../interfaces/busquedaPaises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  constructor(private paisService : PaisService) { }

  termino  : string  = '';
  hayError : boolean = false;
  paises   : RespuestaBusquedaPais[] = [];

  /**Termino que viene del input */
  buscar( terminoParam : string ){
    this.hayError = false;
    this.termino = terminoParam;
    /**Por si solo el llamado no es suficiente, necesitamos el suscribe() sin embargo
     * optamos por no hacerlo en el service, entonces debemos hacerlo acá. El suscribe
     * tiene el argumento de respuesta correcta, pero también como segundo argumento podemos
     * capturar el error.
     */
    this.paisService.buscarCapital(this.termino)
      .subscribe( (respuestaCapital) => {
        console.log(respuestaCapital);
        this.paises = respuestaCapital;
    }, (error => {
      console.warn('Error => ');
      console.warn(error);
      this.hayError = true;
      this.paises   = [];
    }));
  }

  sugerencias( termino : string ){
    this.hayError = false;
    //TODO: Crear Sugerencias ...
  }

}
