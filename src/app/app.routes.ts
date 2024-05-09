import { Routes } from '@angular/router';
import { ProductDetailComponent } from './all-components/product-detail/product-detail.component';
import { HomePageComponent } from './all-components/home-page/home-page.component';
import { CartComponent } from './all-components/cart/cart.component';

export const routes: Routes = [
    {path:'home', component:HomePageComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'product-detail', component:ProductDetailComponent},
    {path:'cart-page',component:CartComponent}
];
