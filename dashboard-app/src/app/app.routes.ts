import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Homepage'
    },
    {
        path: 'users',
        component: UsersComponent,
        title: 'Users page'
    },
    {
        path: 'products',
        component: ProductsComponent,
        title: 'Products page'
    },
    {
        path: 'users/:id',
        component: UserComponent,
        title: 'User page'
    },
    {
        path: 'products/:id',
        component: ProductComponent,
        title: 'Product page'
    },

];
