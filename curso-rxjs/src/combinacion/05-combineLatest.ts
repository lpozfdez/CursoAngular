import { combineLatest, forkJoin, fromEvent, merge } from "rxjs";
import { pluck } from 'rxjs/operators';



// const keyUp$ = fromEvent( document,'keyup' );
// const click$ = fromEvent( document,'click' );
// //Combina los dos últimos de cada observable
// forkJoin( 
//     keyUp$.pipe(pluck('type')), 
//     click$.pipe(pluck('type')),
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.type = 'email';
input2.type = 'password';

input1.placeholder = 'email@gmail.com';
input2.placeholder = 'password';

document.querySelector('body').append( input1, input2 );


//Helper

const getInputStream = (elem: HTMLElement) => {
    return fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
        pluck<KeyboardEvent>( 'target', 'value')
    )
}
combineLatest(
    getInputStream(input1),
    getInputStream(input2)
).subscribe(console.log);
