import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../all-services/cart.service';
import { ProductService } from '../../all-services/product.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss'
})
export class SearchBarComponent {
  
  productService:ProductService = inject(ProductService);

  userInput:string ="";
  
  ngDoCheck(){
    if(this.productService.menuFlag){
      this.userInput ="";
      this.productService.menuFlag = false;
    }
    this.productService.keySearch=this.userInput;
    // this.searchResult.emit(this.userInput);
  }



}
