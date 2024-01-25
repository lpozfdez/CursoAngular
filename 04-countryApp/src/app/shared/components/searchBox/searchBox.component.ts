import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './searchBox.component.html',
  styleUrls: ['./searchBox.component.css'],
})
export class SearchBoxComponent implements OnInit, OnDestroy{

  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;

  //Propiedad recibida según la página en q se utilice el componente, para personalizar el input.
  @Input()
  public placeholder: string = '';

  //Evento ,q emite el value del input llamado en el keyup.enter
  // @Output()
  // public onValue = new EventEmitter<string>();

  //Evento q emite el value del input mediante el Subject "debouncer"
  @Output()
  public onDebounce = new EventEmitter<string>();

  //Propiedad q guarda el término de búsqueda
  @Input()
  public initialValue: string = '';


  ngOnInit(): void {

    //Se inicia el Subject y se emite el evento
    this.debouncerSubscription = this.debouncer.pipe(
      debounceTime(300)
    ).subscribe( value => {
      this.onDebounce.emit(value)
    });

  }

  //Se desuscribe del Subject cuando el componente finaliza
  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  //Emite el valor del input en el evento keyup.enter
  // emitValue( value:string ):void {
  //   this.onValue.emit( value );
  // }

  //Funcion para mandar el término de búsqueda al Subject
  onKeyPress( searchTerm: string ){
    this.debouncer.next( searchTerm );
  }



}
