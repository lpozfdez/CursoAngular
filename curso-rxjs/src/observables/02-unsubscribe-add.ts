import { Observable, Observer } from 'rxjs';

// const obs$ = Observable.create();

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('Completado')
};

const intervalos$ = new Observable ( subscriber => {
    //Crear un contador
    let count = 0;

    const interval = setInterval( () =>{
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);
        
    setTimeout( ()=>{
        subscriber.complete();
    }, 2500);

    return () =>{
        clearInterval(interval);
        console.log('Intervalo destruido');
    }
});

const subs1 = intervalos$.subscribe( observer );
const subs2 = intervalos$.subscribe( observer ); 
const subs3 = intervalos$.subscribe( observer );

subs1.add( subs2 );

setTimeout(() => {

     subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado timeout');
},6000);
