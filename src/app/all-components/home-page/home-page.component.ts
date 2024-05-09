import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { TopFoodComponent } from '../top-food/top-food.component';
import { ProductCardsComponent } from '../product-cards/product-cards.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,SearchBarComponent,TopFoodComponent,ProductCardsComponent,RouterOutlet],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  userName:string ="Pranav";

  searchResult!:string;
  topProduct!:string;

  ngOnInit(){
    console.log(this.searchResult +"ngOnInit");
  }

  getSearchResult(val:string){
    this.searchResult = val;
  }


  
}
