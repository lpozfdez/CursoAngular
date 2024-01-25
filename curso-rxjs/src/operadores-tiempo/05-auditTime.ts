import { auditTime, fromEvent, map, tap} from "rxjs";

const click$ = fromEvent<PointerEvent>( document,'click' );

click$.pipe(
    map(({x,y}) => ({x,y})),//desenstructuración
    tap(val=> console.log( 'tap', val )),
    auditTime(2000)//Emite el valor más reciente
).subscribe(console.log);