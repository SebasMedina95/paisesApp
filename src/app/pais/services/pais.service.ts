import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespuestaBusquedaPais } from '../interfaces/busquedaPaises.interfaces';


@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http : HttpClient) { }

  /**https://restcountries.eu/rest/v2/name/united */
  private apiUrl : string = 'https://restcountries.eu/rest/v2';

  get httpParams (){
    /**Configuremos los parámetros */
    return new HttpParams().set('fields', 'flag;name;capital;region;alpha3Code;alpha2Code;population');
  }

  /**Recordemos que, RespuestaBusquedaPais es el nombre de la clase que se creo en 
   * la interfaz busquedaPaises.interfaces, recordemos que, lo que nos devuelve Postman,
   * lo colocamos en https://app.quicktype.io/, convertimos usando como lenguaje TS y allí
   * nos genera la interfaz, de este modo, generamos el tipado correspondiente, cambiando
   * <any> por <RespuestaBusquedaPais>
   * 
   * PD: Le colocamos [] para retornar varios resultados!.
   */
  buscarPais(terminoBusqueda : string) : Observable<RespuestaBusquedaPais[]> {


    const url = `${this.apiUrl}/name/${terminoBusqueda}`;
    /**No quiero tener todo ajustado en el service, podríamos usar */
    return this.http.get<RespuestaBusquedaPais[]>(url, {params : this.httpParams}); //Retornamos un Observable y no olvidemos tipificar el retorno <RespuestaBusquedaPais>.
  }

  buscarCapital(terminoBusqueda : string) : Observable<RespuestaBusquedaPais[]> {
    const url = `${this.apiUrl}/capital/${terminoBusqueda}`;
    /**No quiero tener todo ajustado en el service, podríamos usar */
    return this.http.get<RespuestaBusquedaPais[]>(url, {params : this.httpParams}); //Retornamos un Observable y no olvidemos tipificar el retorno <RespuestaBusquedaPais>.
  }

  getPaisPorCodigoAlpha(idAlphaPais : string) : Observable<RespuestaBusquedaPais> { //Retornamos un solo país
    const url = `${this.apiUrl}/alpha/${idAlphaPais}`;
    /**No quiero tener todo ajustado en el service, podríamos usar */
    return this.http.get<RespuestaBusquedaPais>(url); //Retornamos un Observable y no olvidemos tipificar el retorno <RespuestaBusquedaPais>.
  }

  buscarRegion(terminoRegion : string) : Observable<RespuestaBusquedaPais[]> {
    const url = `${this.apiUrl}/region/${terminoRegion}`;
    /**No quiero tener todo ajustado en el service, podríamos usar */
    return this.http.get<RespuestaBusquedaPais[]>(url, {params : this.httpParams}); //Retornamos un Observable y no olvidemos tipificar el retorno <RespuestaBusquedaPais>.
  }


  

  
}
