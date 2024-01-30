import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { AuthStatus } from './auth/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'authApp';

  private authService = inject( AuthService );
  private router = inject(Router);
  /**
   * Señal computada: Una señal es un envoltorio alrededor de un valor que puede notificar a los consumidores
   *  interesados cuando ese valor cambia. Las señales pueden contener cualquier valor, desde primitivas simples
   * hasta estructuras de datos complejas.
   */
  public finishedAuthCheck = computed<boolean>( ()=>{
    if(this.authService.authStatus() === AuthStatus.checking){
      return false;
    }
    return true;
  });

  /**
   * Los efectos son operaciones que se ejecutan cada vez que cambian uno o más valores de una señal.
   * Los efectos siempre se ejecutan al menos una vez.
   * Cuando se ejecuta un efecto, rastrea cualquier valor de señal que se lea.
   *
   * los efectos creados dentro de los componentes se destruyen cuando el componente se destruye. Lo mismo ocurre
   * con los efectos dentro de las directivas, servicios, etc.
   *
   * Los efectos devuelven un EffectRef eso se puede usar para destruirlos manualmente,
   * a través del .destroy() operación.
  */
  public authStatusChangedEffect = effect( ()=>{
    switch(this.authService.authStatus()){
      case AuthStatus.checking:
        return;
      case AuthStatus.authenticated:
        this.router.navigateByUrl('/dashboard');
        return;
      case AuthStatus.notAuthenticate:
        this.router.navigateByUrl('/auth/login');
        return;
    }
  });

}
