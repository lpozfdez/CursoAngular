import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {

  public intervalo$?: Subscription;


  @Input()
  public price: number = 0;


  ngOnInit(): void {
    console.log(' Componente hijo:  ngOnInit');

    this.intervalo$ = interval(1000).subscribe( val => console.log(` Tiks: ${val} `))

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(' Componente hijo:  ngOnChanges');
    console.log({changes});


  }
  ngOnDestroy(): void {
    console.log(' Componente hijo:  ngOnDestroy');

    this.intervalo$?.unsubscribe();

    console.log('------------');
  }



}
