import { distinct, distinctUntilChanged, from, of } from "rxjs";

// distinctUntilChanged Omite los consecutivos

const numeros$ = of (1,5,2,7,3,3,3,3,2);

numeros$.pipe(
    distinctUntilChanged() //===
).subscribe(console.log);



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
        nombre: 'Megaman'
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
    distinctUntilChanged( (pre,act) => pre.nombre === act.nombre )
).subscribe(console.log);