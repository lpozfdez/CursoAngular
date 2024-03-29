import { Component, OnDestroy, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user-request.interface';

@Component({
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.css']
})
export class PropertiesPageComponent implements OnDestroy {

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  public counter = signal(10);
  public fullName = computed( ()=> `${ this.user().first_name } ${ this.user().last_name}` );

  public user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name:'George',
    last_name: 'Bluth',
    avatar: "https://reqres.in/img/faces/1-image.jpg"
  });

  public userChangedEffect = effect ( ()=> {
    console.log( `${this.user().first_name}-${this.counter()}` );
  });

  onFieldUpdated(field: keyof User, value:string){ //keyof añade la restricción de que sea un key de User
    console.log(field, value);

    // this.user.set({
    //   ...this.user(),
    //   [field]:value,
    // });

    // this.user.update( user => ({
    //   ...user,
    //   [field]: value
    // }) )

    this.user.update( current => {
      switch( field ){
        case 'email':
          current.email = value;
          break;
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number( value );
          break;
      }
      return current;
    });

  }



}
