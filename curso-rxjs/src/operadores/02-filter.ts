import { filter, map } from 'rxjs/operators';
import { range, from, fromEvent } from 'rxjs';


// range(1,10).pipe(
//     filter( val => val % 2 === 0 )
// ).subscribe( console.log );

range(20,30).pipe(
    filter( (val, i) => {
        console.log('index', i)
        return val % 2 === 0;
    })
)//.subscribe( console.log );

interface Personaje{
    tipo: string,
    nombre: string
}

const personajes: Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Jocker'
    },
];

const obsPersonaljes$ = from(personajes);

obsPersonaljes$.pipe(
    filter( p => p.tipo !== 'heroe' )
).subscribe(console.log);

//Se dispara solo el evento de la tecla Enter
//Ojo con los tipos de datos!!!!!
const keyUp$ = fromEvent<KeyboardEvent>( document, 'keyup' ).pipe(
    map( ev => ev.key ),//Recibe KeyboardEvent, Emite string
    filter( key => key === 'Enter' )
).subscribe( console.log );




