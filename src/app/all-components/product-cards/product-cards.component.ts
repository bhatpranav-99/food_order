import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../../all-services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-product-cards',
  standalone: true,
  imports: [CommonModule],
  providers:[SearchBarComponent],
  templateUrl: './product-cards.component.html',
  styleUrl: './product-cards.component.scss'
})
export class ProductCardsComponent {

  productService:ProductService = inject(ProductService);

  productList!:Product[];

  router:Router = inject(Router);
  actRoute:ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(){
    this.productList = this.productService.allProduct;
  }
  
  ngDoCheck(){
    this.productList = this.productService.searchProduct();
  }

    navigateToProductDetail(prod:Product){
      this.router.navigate(['product-detail'],{state:prod});
   }

   updateManu(){
    this.productService.menuFlag = true;
    this.productList = this.productService.searchProduct();
  
    
   }

}
