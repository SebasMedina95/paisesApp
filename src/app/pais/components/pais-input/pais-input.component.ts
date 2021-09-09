import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{
  
  
  /**Emitiremos el termino, String por el termino */
  @Output() onEnter    : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce : EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder : string = '';
  /**Es como un observable */
  debouncer : Subject<string> = new Subject();
  
  termino : string = '';
  
  /**Se dispara una sola vez, lo usaremos para manejar el debouncer */
  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500)) //No emitas el suscribe hasta que el observable no pase por 500 milesamas de segundo
      .subscribe(valorBusqueda => {
      this.onDebounce.emit( valorBusqueda );
    });
  }

  /**Cuando presiono enter, disparo la función de buscar, esta función hacemos
   * alusión al Output y emitimos el termino
   */
  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    //const valor = evento.target.value;
    //console.log(valor);
    //console.log('Debouncer', this.termino);
    this.debouncer.next(this.termino); //Mandar el siguiente termino
  }

}
