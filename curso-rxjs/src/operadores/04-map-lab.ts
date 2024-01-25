import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus erat, nec imperdiet metus. Phasellus ac ultrices ligula. Nunc tempus purus quis diam molestie, a volutpat sem porttitor. Sed eget rhoncus risus. Nunc risus lacus, interdum et augue id, porta efficitur felis. Nam porttitor ultrices elit vel pulvinar. Pellentesque varius aliquet ex ut bibendum. Phasellus at tempus odio, id sodales tellus. Integer gravida sapien lacus, non hendrerit lorem euismod non. Maecenas non tortor vestibulum ante laoreet fermentum. Phasellus auctor nisi sed dolor ornare, sed iaculis ligula hendrerit.
<br/><br/>
Donec at commodo lectus. Vestibulum laoreet, dui sit amet molestie tempor, libero diam eleifend eros, ac sollicitudin nunc dui vel nibh. Fusce mattis egestas sem in ultrices. Duis a nisl lacinia, rhoncus ipsum a, facilisis tellus. Praesent tempor sagittis ante, ac cursus est rhoncus vitae. Morbi rutrum fermentum facilisis. Vestibulum at libero a velit luctus ullamcorper ut in ligula. Praesent molestie accumsan sollicitudin. Aenean cursus sagittis mi dignissim imperdiet. Ut nec rhoncus sapien, a placerat ligula. Cras pulvinar turpis in nunc rutrum, a interdum orci ultricies. Suspendisse efficitur est nec mollis fermentum. Nulla facilisi.
<br/><br/>
Nullam rutrum nec eros ac egestas. Fusce fermentum aliquam metus at hendrerit. Maecenas pretium ipsum a volutpat volutpat. Duis condimentum dui eget volutpat consequat. Duis sit amet mi mi. Nulla quis gravida nisi. Suspendisse vestibulum justo eleifend, facilisis diam at, dictum turpis.
<br/><br/>
Aliquam erat velit, finibus non massa imperdiet, ultrices consequat ex. Quisque consectetur quam a posuere condimentum. Praesent id faucibus urna. Duis fringilla et neque sit amet dictum. Proin tempor diam non urna hendrerit cursus. Nullam hendrerit sollicitudin est. Integer id eleifend urna. Maecenas sed libero lacinia, ultrices urna scelerisque, accumsan justo. Phasellus dictum felis quam, eget faucibus massa molestie convallis. Morbi commodo facilisis congue. Donec porttitor risus at mi gravida aliquet.
<br/><br/>
Aenean volutpat, urna ornare iaculis commodo, turpis mi facilisis erat, quis ultrices mi lorem eget nulla. Donec vel est suscipit, pretium nulla ut, hendrerit turpis. Cras rhoncus at justo ac dapibus. Praesent interdum posuere urna, nec condimentum turpis ullamcorper ullamcorper. Donec congue porta cursus. Cras vulputate libero ut scelerisque tincidunt. Praesent elementum tellus arcu, non ultricies lacus hendrerit at. Duis venenatis dui aliquam enim sollicitudin posuere. In sit amet augue arcu. Fusce mollis dignissim urna, non aliquet enim malesuada eu. Fusce fermentum augue vel felis mattis, vitae porta massa tincidunt. Mauris massa sem, vulputate eget ligula vel, tincidunt interdum tellus. Donec vestibulum cursus enim, sit amet vehicula ligula. Integer ac felis nec tellus auctor pulvinar eget vel lectus. Phasellus in urna nec mi faucibus luctus at in purus. Cras sollicitudin est ac mauris fermentum, eget sollicitudin quam molestie.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus erat, nec imperdiet metus. Phasellus ac ultrices ligula. Nunc tempus purus quis diam molestie, a volutpat sem porttitor. Sed eget rhoncus risus. Nunc risus lacus, interdum et augue id, porta efficitur felis. Nam porttitor ultrices elit vel pulvinar. Pellentesque varius aliquet ex ut bibendum. Phasellus at tempus odio, id sodales tellus. Integer gravida sapien lacus, non hendrerit lorem euismod non. Maecenas non tortor vestibulum ante laoreet fermentum. Phasellus auctor nisi sed dolor ornare, sed iaculis ligula hendrerit.
<br/><br/>
Donec at commodo lectus. Vestibulum laoreet, dui sit amet molestie tempor, libero diam eleifend eros, ac sollicitudin nunc dui vel nibh. Fusce mattis egestas sem in ultrices. Duis a nisl lacinia, rhoncus ipsum a, facilisis tellus. Praesent tempor sagittis ante, ac cursus est rhoncus vitae. Morbi rutrum fermentum facilisis. Vestibulum at libero a velit luctus ullamcorper ut in ligula. Praesent molestie accumsan sollicitudin. Aenean cursus sagittis mi dignissim imperdiet. Ut nec rhoncus sapien, a placerat ligula. Cras pulvinar turpis in nunc rutrum, a interdum orci ultricies. Suspendisse efficitur est nec mollis fermentum. Nulla facilisi.
<br/><br/>
Nullam rutrum nec eros ac egestas. Fusce fermentum aliquam metus at hendrerit. Maecenas pretium ipsum a volutpat volutpat. Duis condimentum dui eget volutpat consequat. Duis sit amet mi mi. Nulla quis gravida nisi. Suspendisse vestibulum justo eleifend, facilisis diam at, dictum turpis.
<br/><br/>
Aliquam erat velit, finibus non massa imperdiet, ultrices consequat ex. Quisque consectetur quam a posuere condimentum. Praesent id faucibus urna. Duis fringilla et neque sit amet dictum. Proin tempor diam non urna hendrerit cursus. Nullam hendrerit sollicitudin est. Integer id eleifend urna. Maecenas sed libero lacinia, ultrices urna scelerisque, accumsan justo. Phasellus dictum felis quam, eget faucibus massa molestie convallis. Morbi commodo facilisis congue. Donec porttitor risus at mi gravida aliquet.
<br/><br/>
Aenean volutpat, urna ornare iaculis commodo, turpis mi facilisis erat, quis ultrices mi lorem eget nulla. Donec vel est suscipit, pretium nulla ut, hendrerit turpis. Cras rhoncus at justo ac dapibus. Praesent interdum posuere urna, nec condimentum turpis ullamcorper ullamcorper. Donec congue porta cursus. Cras vulputate libero ut scelerisque tincidunt. Praesent elementum tellus arcu, non ultricies lacus hendrerit at. Duis venenatis dui aliquam enim sollicitudin posuere. In sit amet augue arcu. Fusce mollis dignissim urna, non aliquet enim malesuada eu. Fusce fermentum augue vel felis mattis, vitae porta massa tincidunt. Mauris massa sem, vulputate eget ligula vel, tincidunt interdum tellus. Donec vestibulum cursus enim, sit amet vehicula ligula. Integer ac felis nec tellus auctor pulvinar eget vel lectus. Phasellus in urna nec mi faucibus luctus at in purus. Cras sollicitudin est ac mauris fermentum, eget sollicitudin quam molestie.
<br/><br/>
Nullam rutrum nec eros ac egestas. Fusce fermentum aliquam metus at hendrerit. Maecenas pretium ipsum a volutpat volutpat. Duis condimentum dui eget volutpat consequat. Duis sit amet mi mi. Nulla quis gravida nisi. Suspendisse vestibulum justo eleifend, facilisis diam at, dictum turpis.
<br/><br/>
Aliquam erat velit, finibus non massa imperdiet, ultrices consequat ex. Quisque consectetur quam a posuere condimentum. Praesent id faucibus urna. Duis fringilla et neque sit amet dictum. Proin tempor diam non urna hendrerit cursus. Nullam hendrerit sollicitudin est. Integer id eleifend urna. Maecenas sed libero lacinia, ultrices urna scelerisque, accumsan justo. Phasellus dictum felis quam, eget faucibus massa molestie convallis. Morbi commodo facilisis congue. Donec porttitor risus at mi gravida aliquet.
<br/><br/>
Aenean volutpat, urna ornare iaculis commodo, turpis mi facilisis erat, quis ultrices mi lorem eget nulla. Donec vel est suscipit, pretium nulla ut, hendrerit turpis. Cras rhoncus at justo ac dapibus. Praesent interdum posuere urna, nec condimentum turpis ullamcorper ullamcorper. Donec congue porta cursus. Cras vulputate libero ut scelerisque tincidunt. Praesent elementum tellus arcu, non ultricies lacus hendrerit at. Duis venenatis dui aliquam enim sollicitudin posuere. In sit amet augue arcu. Fusce mollis dignissim urna, non aliquet enim malesuada eu. Fusce fermentum augue vel felis mattis, vitae porta massa tincidunt. Mauris massa sem, vulputate eget ligula vel, tincidunt interdum tellus. Donec vestibulum cursus enim, sit amet vehicula ligula. Integer ac felis nec tellus auctor pulvinar eget vel lectus. Phasellus in urna nec mi faucibus luctus at in purus. Cras sollicitudin est ac mauris fermentum, eget sollicitudin quam molestie.
<br/><br/>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non rhoncus erat, nec imperdiet metus. Phasellus ac ultrices ligula. Nunc tempus purus quis diam molestie, a volutpat sem porttitor. Sed eget rhoncus risus. Nunc risus lacus, interdum et augue id, porta efficitur felis. Nam porttitor ultrices elit vel pulvinar. Pellentesque varius aliquet ex ut bibendum. Phasellus at tempus odio, id sodales tellus. Integer gravida sapien lacus, non hendrerit lorem euismod non. Maecenas non tortor vestibulum ante laoreet fermentum. Phasellus auctor nisi sed dolor ornare, sed iaculis ligula hendrerit.
<br/><br/>
Donec at commodo lectus. Vestibulum laoreet, dui sit amet molestie tempor, libero diam eleifend eros, ac sollicitudin nunc dui vel nibh. Fusce mattis egestas sem in ultrices. Duis a nisl lacinia, rhoncus ipsum a, facilisis tellus. Praesent tempor sagittis ante, ac cursus est rhoncus vitae. Morbi rutrum fermentum facilisis. Vestibulum at libero a velit luctus ullamcorper ut in ligula. Praesent molestie accumsan sollicitudin. Aenean cursus sagittis mi dignissim imperdiet. Ut nec rhoncus sapien, a placerat ligula. Cras pulvinar turpis in nunc rutrum, a interdum orci ultricies. Suspendisse efficitur est nec mollis fermentum. Nulla facilisi.
<br/><br/>
Nullam rutrum nec eros ac egestas. Fusce fermentum aliquam metus at hendrerit. Maecenas pretium ipsum a volutpat volutpat. Duis condimentum dui eget volutpat consequat. Duis sit amet mi mi. Nulla quis gravida nisi. Suspendisse vestibulum justo eleifend, facilisis diam at, dictum turpis.
<br/><br/>
Aliquam erat velit, finibus non massa imperdiet, ultrices consequat ex. Quisque consectetur quam a posuere condimentum. Praesent id faucibus urna. Duis fringilla et neque sit amet dictum. Proin tempor diam non urna hendrerit cursus. Nullam hendrerit sollicitudin est. Integer id eleifend urna. Maecenas sed libero lacinia, ultrices urna scelerisque, accumsan justo. Phasellus dictum felis quam, eget faucibus massa molestie convallis. Morbi commodo facilisis congue. Donec porttitor risus at mi gravida aliquet.
<br/><br/>
Aenean volutpat, urna ornare iaculis commodo, turpis mi facilisis erat, quis ultrices mi lorem eget nulla. Donec vel est suscipit, pretium nulla ut, hendrerit turpis. Cras rhoncus at justo ac dapibus. Praesent interdum posuere urna, nec condimentum turpis ullamcorper ullamcorper. Donec congue porta cursus. Cras vulputate libero ut scelerisque tincidunt. Praesent elementum tellus arcu, non ultricies lacus hendrerit at. Duis venenatis dui aliquam enim sollicitudin posuere. In sit amet augue arcu. Fusce mollis dignissim urna, non aliquet enim malesuada eu. Fusce fermentum augue vel felis mattis, vitae porta massa tincidunt. Mauris massa sem, vulputate eget ligula vel, tincidunt interdum tellus. Donec vestibulum cursus enim, sit amet vehicula ligula. Integer ac felis nec tellus auctor pulvinar eget vel lectus. Phasellus in urna nec mi faucibus luctus at in purus. Cras sollicitudin est ac mauris fermentum, eget sollicitudin quam molestie.
`;

//Texto
const body = document.querySelector('body');
body.append(texto);

//Barra de progreso
const progressBar = document.createElement('div');//Es un div con estilos
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

//Streams
//Creamos el observable para el evento scroll
const scroll$ = fromEvent<Event>( document, 'scroll' );

//función para calcular el % scroll
const calcularPorcentajeScroll = ( event ) => {
    //Variable que necesitamos del evento
    const {
        clientHeight,
        scrollTop,
        scrollHeight
    } = event.target.documentElement; //Elemento dentro del evento de que se sacan las variables necesarias

    //Fórmula para calcular el % de scroll realizado:
    /**  scrollTop -> distancia desde el límite superior de la  pantalla vista y tamaño del elemento scroleado.
     *  clientHeight -> tamaño de la pantalla sin scroll
     *  scrollHeight -> Tamaño del contenido completo del scroll
     * 
     * ( scrollTop / (scrollHeight - clientHeight) ) * 100 
     * 
    */

    return ( scrollTop / (scrollHeight - clientHeight) ) * 100 ;

};

const progress$ = scroll$.pipe(
    // map( ev => calcularPorcentajeScroll(ev) )
    map( calcularPorcentajeScroll ),
    tap( console.log )
);


progress$.subscribe( porcentaje => {//Añadimos el % calculado al width del div
    progressBar.style.width = `${porcentaje}%`;
});