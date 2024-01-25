import { Observable, debounceTime, fromEvent, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeAll, pluck } from 'rxjs/operators';
import { GitHubUser, GithubUsersResp } from "../interfaces/gitHub-users.interfaces";


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');

body.append( textInput, orderList );


const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

//Helpers

const mostrarUsuarios = (usuarios: GitHubUser[]) => {
    orderList.innerHTML = '';
    console.log(usuarios);

    for( let usuario of usuarios){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text ='Ver página';
        anchor.target = '_blank';

        li.append(img);
        li.append(' '+ usuario.login + ' ');
        li.append(anchor);

        orderList.append(li);
    }

}

//Streams

// input$.pipe(
//     debounceTime(500),
//     map( event => {//Devuelve otro observable
//         const texto = event.target['value'];
//         //return texto;
//         return ajax.getJSON( `https://api.github.com/search/users?q=${texto}` );
//     })
// ).subscribe( resp => 
//     resp.pipe( pluck('url') ).subscribe(console.log)
// );

input$.pipe(
    debounceTime<KeyboardEvent>(500),//Espera a q el usuario termine de escribir
    map<KeyboardEvent, string>(({target}) => (target as HTMLInputElement).value),//Extrae el value del target del evento keyup
    map<string, Observable<GithubUsersResp>>( texto => ajax.getJSON( `https://api.github.com/search/users?q=${texto}` )),//Devuelve otro observable con la response de la petición ajax
    mergeAll<Observable<GithubUsersResp>>(),//Se maneja y se subscribe
    map<GithubUsersResp, GitHubUser[]>( x => x.items )//Extrae los items
).subscribe( mostrarUsuarios );