import { fromEvent, map, takeWhile } from "rxjs";


const click$ = fromEvent<PointerEvent>(document, 'click');


click$.pipe(
    map(({x, y})=> ({x,y})),
    // takeWhile( ({x,y}) => y<=150 )
    takeWhile( ({x,y}) => y<=150, true )

).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});