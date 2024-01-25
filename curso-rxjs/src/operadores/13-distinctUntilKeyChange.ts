import { distinctUntilKeyChanged, from} from "rxjs";
// distinctUntilKeyChanged Omite los consecutivos
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
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Batman'
    },
];

from(personajes).pipe(
    distinctUntilKeyChanged( 'nombre' )
).subscribe(console.log);