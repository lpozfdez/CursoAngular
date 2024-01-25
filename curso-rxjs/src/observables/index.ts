import { fromEvent, interval, skip, takeUntil, tap } from "rxjs";


//Creamos un botón
const btn = document.createElement('button');
btn.innerHTML = 'Detener timer';

document.querySelector('body').append(btn);

const counter$ = interval(500); //Observable que emite
const clickBtn$ = fromEvent( btn, 'click').pipe(
    tap(() => console.log('Antes skip')),
    skip(1),//Solo emite si se hace 2 clicks
    tap(() => console.log('Después skip')),
); //Observable que genera el evento

counter$.pipe(
    takeUntil(clickBtn$), //Emite valores hasta que el otro observable emite valor
).subscribe({
    next: val => console.log('next:', val),
    complete: () => console.log('complete')
});

