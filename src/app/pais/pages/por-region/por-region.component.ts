import { Component, OnInit } from '@angular/core';
import { RespuestaBusquedaPais } from '../../interfaces/busquedaPaises.interfaces';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
    #botonerita{
      margin-right: 5px;
    }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones     : string[] = ["africa", "americas", "asia", "europe", "oceania"];
  regionActiva : string = '';
  paises       : RespuestaBusquedaPais[] = [];
  
  constructor(private http : PaisService) { }

  /**Para aplcar la clase según el botón presionado. */
  getClaseCSS( region : string ) : string{
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary'
  }

  ngOnInit(): void {
  }

  activarRegion(region : string){
    
    /**Evitar cargar nuevamente toda la respuesta si ya estamos en la misma región */
    if(region === this.regionActiva){
      return; 
    }

    this.regionActiva = region;
    this.paises = [];

    console.log(this.regionActiva);
    this.http.buscarRegion(region)
      .subscribe( respuestaRegion => {
        console.log(respuestaRegion);
        this.paises = respuestaRegion;
      });
  }

}
