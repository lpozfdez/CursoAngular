import { map, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = (response: Response) => {
    if(!response.ok){
        throw new Error(response.statusText);
    }

    return response;
};

const atrapaErr = (err: AjaxError) => {
    console.warn('error: ', err.message)
    return of([]);
}

//const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data) )
//     .catch( err => console.warn('Error en url', err));

ajax( url ).pipe(
    pluck('response'),
    catchError(atrapaErr)
    //map( resp => resp.response )
).subscribe( users => console.log('usuarios:', users ) );