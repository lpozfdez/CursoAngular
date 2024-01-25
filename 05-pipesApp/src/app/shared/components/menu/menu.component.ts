import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  standalone: false,
  template: `<p-menu [model]="items"></p-menu>`,
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {label: 'New', icon: 'pi pi-fw pi-plus'},
      {label: 'Open', icon: 'pi pi-fw pi-download'},
      {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
    ]
  }


}
