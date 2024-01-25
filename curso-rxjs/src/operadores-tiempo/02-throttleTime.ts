import { debounceTime,throttleTime, fromEvent, asyncScheduler } from "rxjs";
import { distinctUntilChanged, pluck } from 'rxjs/operators';


const click$ = fromEvent(document, 'click');

click$.pipe(
    throttleTime(3000)
);//.subscribe(console.log);


//Ejemplo2
const input = document.createElement('input');
document.querySelector('body').append(input);


const input$ = fromEvent<KeyboardEvent>(input, 'keyup');



input$.pipe(
    throttleTime(2000,asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck( 'target', 'value' ),
    distinctUntilChanged()
).subscribe(console.log)