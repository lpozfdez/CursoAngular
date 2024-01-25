import { Observable, debounceTime, fromEvent, interval, map } from "rxjs";
import { ajax } from "rxjs/ajax";
import { mergeAll, mergeMap, pluck, switchMap } from 'rxjs/operators';
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
input$.pipe(
    debounceTime<KeyboardEvent>(500),//Espera a q el usuario termine de escribir
    map<KeyboardEvent, string>(({target}) => (target as HTMLInputElement).value),//Extrae el value del target del evento keyup
    mergeMap<string, Observable<GithubUsersResp>>( texto => ajax.getJSON( `https://api.github.com/search/users?q=${texto}` )),//Devuelve otro observable con la response de la petición ajax
    map<GithubUsersResp, GitHubUser[]>( x => x.items )//Extrae los items
)//.subscribe( mostrarUsuarios );

const url = 'https://httpbin.org/delay/1?arg=';

input$.pipe(
    pluck('target','value'),
    //mergeMap( texto => ajax.getJSON( url + texto )),//Esta opcion hace una peticion por cada letra
    switchMap( texto => ajax.getJSON( url + texto ) )//Esta opcion hace una peticion por cada letra y se queda solo la última, las otras las cancela
).subscribe(console.log);