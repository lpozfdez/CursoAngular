import { fromEvent, interval, mergeMap, switchMap } from 'rxjs';

const click$ = fromEvent( document,'click' );
const interval$ = interval(1000);


// mergeMap: varias subscripciones internas
// click$.pipe(
//     mergeMap( ()=> interval$)
// ).subscribe(console.log);

// switchMap: solo una subscripcion interna
click$.pipe(
    switchMap( ()=> interval$)
).subscribe(console.log);