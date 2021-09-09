import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'; //switchMap Permite recibir un observable y devolver otro observable; tap efecto secundario
import { RespuestaBusquedaPais } from '../../interfaces/busquedaPaises.interfaces';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais! : RespuestaBusquedaPais;

  /**Tomar la ruta, controlar el cambio de la url */
  constructor(private rutaActiva : ActivatedRoute,
              private http : PaisService) { }
  
  /**Detectar cambios en la URL, el ngOnInit es un buen lugar para ello */
  ngOnInit(): void {
    // this.rutaActiva.params
    // .subscribe( parametro =>  {
    //   console.log(parametro); //Nos reconoce el codigoPais que definimos en la ruta, desde el Routing (app-routing.module.ts)
    //   console.log(parametro.codigoPais); //Recordemos que codigoPais fue el id que coloque desde el routing
    //   this.http.getPaisPorCodigoAlpha(parametro.codigoPais) //Debemos suscribirnos al evento para poder generar los resultados
    //     .subscribe( pais => {
    //       console.log(pais);
    //     })
    // })

    /**Como hacer lo anterior usando RXJS */
    this.rutaActiva.params
      .pipe(
        switchMap( (parametro) => this.http.getPaisPorCodigoAlpha( parametro.codigoPais )),
        tap( respuesta => console.log(respuesta) ) //Imprima lo que responde el anterior.
      )
      .subscribe(respPais => {
        console.log(respPais);
        this.pais = respPais;
      })
  }



}
