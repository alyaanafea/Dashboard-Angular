import { Component } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { AsideComponent } from '../aside/aside.component';
import { UsersComponent } from '../users/users.component';
import { ProductsComponent } from '../products/products.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { routes } from '../../app.routes';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-dash-home',
  standalone: true,
  imports: [
    InputComponent,
    AsideComponent,
    UsersComponent,
    ProductsComponent,
    ProductDetailsComponent,
    UserDetailsComponent,
    RouterLink,
    RouterModule,
  ],
  templateUrl: './dash-home.component.html',
  styleUrl: './dash-home.component.css',
})
export class DashHomeComponent {}
