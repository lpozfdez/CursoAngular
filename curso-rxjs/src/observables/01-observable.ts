import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]: ', error),
    complete: () => console.info('Completado [obs]')

};

const obs$ = new Observable<string>( sbs => {
    sbs.next('Hola');
    sbs.next('mundo');

    sbs.next('Hola');
    sbs.next('mundo');

    //Forzar error
    // const a = undefined;
    // a.nombre = 'Lourdes';

    sbs.complete();

    sbs.next('Hola');
    sbs.next('mundo');
});


obs$.subscribe( observer );
// obs$.subscribe( console.log );

// obs$.subscribe( resp => {
//     console.log(resp);
// } );

// obs$.subscribe(
//     valor => console.log('next: ', valor),
//     error => console.warn('error: ', error),
//     () => console.info('Completado')
// );
