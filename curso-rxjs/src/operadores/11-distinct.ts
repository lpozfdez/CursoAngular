import { distinct, from, of } from "rxjs";


interface Personaje {
    nombre: string
}

const personajes: Personaje[] = [
    {
        nombre: 'Batman'
    },
    {
        nombre: 'Superman'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Robin'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Superman'
    },
    {
        nombre: 'Robin'
    },
    {
        nombre: 'Zero'
    },
];

from(personajes).pipe(
    distinct(p => p.nombre)
).subscribe(console.log);

// const numeros$ = of(1,5,2,7,3,4,5,8,2,4,1,3,5,8,6,9);

// numeros$.pipe(
//     distinct() //===
// ).subscribe(console.log);