import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{ counter }} </h3>

    <button (click)="increaseBy(1)" >Click + 1</button>

    <button (click)="reset()">Reset</button>

    <button (click)="increaseBy(-1)" >Click - 1</button>
  `,
})


export class CounterComponent {
  //constructor() {  }
  public counter: number = 10;

  increaseBy( value: number ):void {
    this.counter += value;
  }

  reset():number {
    return this.counter=10;
  }
}
