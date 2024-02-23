import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashHomeComponent } from './components/dash-home/dash-home.component';
import { LoginComponent } from './components/login/login.component';
import { AsideComponent } from './components/aside/aside.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DashHomeComponent,
    LoginComponent,
    AsideComponent,
    AddProductComponent,
    UserDetailsComponent,
    AddProductComponent,
    ProductDetailsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  id = '';
  title = 'dashboard';
}
