import { catchError, delay, forkJoin, interval, of, take } from "rxjs";
import { ajax } from "rxjs/ajax";

const url = 'https://api.github.com/users';
const gitHub_user = 'klerith';
const numeros$ = of(1,2,3,4,5,6);
const interval$ = interval(1000).pipe( take(3) );
const letras$ = of('a','b','c').pipe( delay(3500) );

//Cuando hay un error dentro de una de las peticiones de forkJoin, las otras peticiones si se hacen
forkJoin({
    usuario: ajax.getJSON( `${url}/${gitHub_user}` ),
    repos: ajax.getJSON( `${url}/${gitHub_user}/ros` )
    .pipe(
        catchError(err => of(err.message))
    ),
    gists: ajax.getJSON( `${url}/${gitHub_user}/gists` )
}).pipe(
    catchError(err => of(err.message))
).subscribe( resp => {
    console.log( resp)
});