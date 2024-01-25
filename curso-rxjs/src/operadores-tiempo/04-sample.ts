import { fromEvent, interval, map, sample } from "rxjs";

const interval$ = interval(500);

const click$ = fromEvent<PointerEvent>( document,'click' );

interval$.pipe(
    sample(click$)
).subscribe(console.log);