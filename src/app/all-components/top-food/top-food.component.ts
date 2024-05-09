import { Component, EventEmitter, Output, inject } from '@angular/core';
import { ProductService } from '../../all-services/product.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-food',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-food.component.html',
  styleUrl: './top-food.component.scss'
})
export class TopFoodComponent {

  productService:ProductService= inject(ProductService);

  topProduct!:Product[];
  flag:boolean = false;
  listNum!:number;

  abc:string="";

  ngOnInit(){
    
      this.topProduct =this.productService.getTopProduct();
      console.log(this.topProduct);
  }

  selectedProduct(prod:string,ind:number){
    
  this.flag = !this.flag;
  this.listNum = ind;

  setTimeout(()=>{
    this.flag = !this.flag;
  },2000)
    
  }

 



}
