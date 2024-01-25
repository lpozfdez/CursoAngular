import { fromEvent, interval } from 'rxjs';
import { map, tap, reduce, take } from 'rxjs/operators';




//Reduce en Javascript
const number = [1,2,3,4,5];

const totalReducer = (acumulador: number, valorActual: number) => {
    return acumulador + valorActual;
};

const total = number.reduce( totalReducer, 0 );

console.log( 'Total reduce en js',total );


//Reduce con RxJx

interval(500).pipe(
    take(6),
    tap(console.log),
    reduce(totalReducer)
).subscribe({
    next: val => console.log( 'next:', val ),
    complete: () => console.log('compleado')
});