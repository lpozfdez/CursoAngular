import { fromEvent } from 'rxjs';
import { first, map, take, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>( document, 'click' );
click$.pipe(
    tap(()=>console.log('tap')),
    // map( ev => ({
    //     clientY: ev.clientY,
    //     clientX: ev.clientX
    // }))

    map( ({clientX, clientY}) => ({clientX,clientY}) ),

    first(ev => ev.clientY>=300)
).subscribe({ 
    next: val => console.log('next:',val),
    complete: () => console.log('complete')
});

