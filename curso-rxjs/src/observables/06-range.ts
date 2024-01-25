import {asyncScheduler, of, range} from 'rxjs';


// const src$ = range(0,5);
const src$ = range(0,5, asyncScheduler);


console.log('inicio');
src$.subscribe(console.log);
console.log('fin');