import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { CartService } from '../../all-services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  route:Router = inject(Router);
  actRoute:ActivatedRoute = inject(ActivatedRoute);
  cartService :CartService = inject(CartService);

  prodObj!:Product;

  quantity:number = 1;

  ngOnInit(){
    this.prodObj = history.state;
  }


  increase(){
    this.quantity++;

  }

  decrease(){
    if(this.quantity !=0){
      this.quantity--;
    }
  }


  selectedData(obj:any){
    
    obj.quantity = this.quantity;

    this.cartService.addProduct(obj);

    this.route.navigate(['cart-page']);
    

  }

}
