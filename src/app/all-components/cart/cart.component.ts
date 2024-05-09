import { Component, inject } from '@angular/core';
import { CartService } from '../../all-services/cart.service';
import { CartObject } from '../../models/cartObject';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,HeaderComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartService:CartService = inject(CartService);
  

  orderedList!:CartObject[];

  quantity:number =1;

  subTotal:number = 0;

  checkoutStatus:boolean = false;

  ngOnInit(){
   this.orderedList =  this.cartService.getOrderedList();
   this.cartService.pageStatus =true;
   this.subTotal = this.cartService.getTotal();
   
  }

  increase(obj:any,val:number){
    val++;
    this.cartService.updateProduct(obj,val);
    this.subTotal = this.cartService.getTotal();
  }

  decrease(obj:any,val:number){
    val--;
    if(val === 0){
      let data = confirm(`Do you want to remove ${obj.productName} from cart?`);
      if(!data){
       val =1;
      }
    }
    this.cartService.updateProduct(obj,val);
    this.subTotal = this.cartService.getTotal();
  }



  changeCheckoutStatus(){
    this.checkoutStatus = !this.checkoutStatus;
  }

 


  ngOnDestroy(){
    this.cartService.pageStatus = false;
  }

}
