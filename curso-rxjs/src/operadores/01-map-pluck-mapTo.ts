import { range, fromEvent } from 'rxjs';
import { map, mapTo, pluck } from 'rxjs/operators';

range(1,5).pipe(
    map<number,string>(val => (val*10).toString())    
)
.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const keyupMap = keyUp$.pipe(
    map( ev => ev.key)
).subscribe( key => console.log('map', key));

const keyupPluck = keyUp$.pipe(
    pluck( 'target', 'baseURI')
).subscribe( key => console.log('pluck', key));

const keyupMapTo = keyUp$.pipe(
    mapTo('tecla presionada')
).subscribe( key => console.log('mapTo', key));