import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";


const letras$ = of('a','b','c');
const mouseup$ = fromEvent( document, 'mouseup' );
const mouseDown$ = fromEvent( document, 'mousedown' );
const interval$ = interval();

letras$.pipe(
    mergeMap( (letra) => interval(1000).pipe(
        map( i => letra+i ),
        take(3)
    ) ));
// ).subscribe({
//     next: val => console.log('next:', val),
//     complete: () => console.log('complete')
// });

/**
 * Se añade un observable "interval" al observable mouseDown hasta que salte el evento del observable mouseUp
 */
mouseDown$.pipe(
    mergeMap( ()=> interval$.pipe(
        takeUntil( mouseup$ )
    ) )
).subscribe( console.log );


