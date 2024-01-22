import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MenuItem } from './menu-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})

export class MenuComponent {
  menuItems: MenuItem[] = [
    { id: 1, name: 'Homepage', icon:'../../../assets/home.svg', url: ''},
    { id: 2, name: 'Profile', icon:'../../../assets/user.svg', url: 'users/1'},
    { id: 3, name: 'Products', icon:'../../../assets/product.svg', url: 'products'},
    { id: 4, name: 'Orders', icon:'../../../assets/order.svg', url: 'orders'},
    { id: 5, name: 'Posts', icon:'../../../assets/post2.svg', url: 'posts'},
    { id: 6, name: 'Users', icon:'../../../assets/user.svg', url: 'users'},
    { id: 7, name: 'Components', icon:'../../../assets/element.svg', url: 'components'},
    { id: 8, name: 'Graphs', icon:'../../../assets/chart.svg', url: 'graphs'},
  ]
}
