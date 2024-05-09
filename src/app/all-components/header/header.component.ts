import { Component, inject } from '@angular/core';
import { CartService } from '../../all-services/cart.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  cartPageStatus!:boolean;

  cartService:CartService = inject(CartService);
  router:Router = inject(Router);

  listLength:number = 0;

  ngOnInit(){
    this.cartPageStatus = this.cartService.pageStatus;
    this.listLength = this.cartService.orderedList.length;
  }

  homePage(){
    console.log("ho")
    this.router.navigate(['/home']);
  }

}
