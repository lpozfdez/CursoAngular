import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'traffic-light';

  button = 'Mostrar';

  openClosedAlert( elemento: HTMLElement ){
    if (elemento.hidden === false) {
      elemento.hidden = true;
      this.button = 'Mostrar';
    } else {
      elemento.hidden = false;
      this.button = 'Ocultar';
    }
  }

}
