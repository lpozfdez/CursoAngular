import { Observable, from } from 'rxjs';
import { reduce, scan, map } from 'rxjs/operators';

const numeros = [1,2,3,4,5];

// const totalAcumulador = (acc, cur) => {
//     return acc + cur;
// };

const totalAcumulador = (acc, cur) => acc + cur;

//Reduce
from(numeros).pipe(
    reduce(totalAcumulador, 0)
).subscribe(console.log);//15

//Scan
from(numeros).pipe(
    scan(totalAcumulador, 0)
).subscribe(console.log);//1,3,6,10,15

//Redux
interface User {
    id?: string,
    autenticado?: boolean,
    token?: string,
    edad?: number
}

const user: User[] = [
    {
        id: 'lpoz',
        autenticado: false,
        token: null,
        //edad: 
    },
    {
        id: 'lpoz',
        autenticado: true,
        token: 'ABC',
        //edad: 
    },
    {
        id: 'lpoz',
        autenticado: true,
        token: 'ABCS123',
        //edad: 
    }
];

//Simulamos cambios en el usuario cuando autentica
const state$ = from(user).pipe(
    scan( (acc, cur) => {
        return { ...acc, ...cur }
    })
);//.subscribe(console.log);

const id$ = state$.pipe(
    map( state => state )
);

id$.subscribe(console.log);