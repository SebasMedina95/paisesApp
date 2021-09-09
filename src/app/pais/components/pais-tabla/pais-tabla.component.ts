import { Component, Input, OnInit } from '@angular/core';
import { RespuestaBusquedaPais } from '../../interfaces/busquedaPaises.interfaces';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
})
export class PaisTablaComponent {

  @Input() paises : RespuestaBusquedaPais[] = [];

}
