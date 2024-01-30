import { Component, computed, inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  private authService = inject(AuthService);

  //Dos formas de consumir el servicio:

  // get user(){
  //   return this.authService.currentUser();
  // }

  public user = computed( ()=> this.authService.currentUser() );

  onLogout(){
    this.authService.logout();
  }

}
