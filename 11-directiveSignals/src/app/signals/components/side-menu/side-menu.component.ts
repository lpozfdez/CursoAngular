import { Component, signal } from '@angular/core';

interface MenuItem {
  title: string;
  router: string;
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', router: 'counter' },
  //   { title: 'Ususario', router: 'user-info' },
  //   { title: 'Mutaciones', router: 'properties' },
  // ];

  public menuItems = signal<MenuItem[]>([
    { title: 'Contador', router: 'counter' },
    { title: 'Ususario', router: 'user-info' },
    { title: 'Mutaciones', router: 'properties' },
  ]);

}
