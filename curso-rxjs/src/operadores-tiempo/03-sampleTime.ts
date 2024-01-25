import { fromEvent, map, sampleTime } from "rxjs";


const click$ = fromEvent<PointerEvent>( document,'click' );

click$.pipe(
    map(({x,y}) => ({x,y})),//desenstructuración
    sampleTime(2000)
).subscribe(console.log);