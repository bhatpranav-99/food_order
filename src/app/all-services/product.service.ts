import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  allProduct:Product[]=[];

  keySearch:string="";

  menuFlag:boolean = false;

  constructor() { 

  this.allProduct = [
   
  new Product({
      productName: "Burger",
      productSubtitle: "Juicy veg Burger",
      productImgUrl: "../../../assets/images/burger.png",
      productPrice: 210,
      productDescription: "A classic veg burger with lettuce, tomato, onion, and pickles on a sesame seed bun.",
      rating:4.6
   }),

   new Product({
    productName: "Pizza",
    productSubtitle: "Garnished Pepperoni Pizza",
    productImgUrl: "../../../assets/images/pizza.png",
    productPrice: 220,
    productDescription: "A classic pizza topped with melted cheese and savory pepperoni slices.",
    rating:4.3
  }),

  new Product({
    productName: "Noodles",
    productSubtitle: "Stir-Fried Noodles",
    productImgUrl: "../../../assets/images/noodles.png",
    productPrice: 325,
    productDescription: "A savory dish of stir-fried noodles with vegetables, meat, and a flavorful sauce.",
    rating:4.1
  }),

 
  new Product({
    productName: "Biryani",
    productSubtitle: "Aromatic Rice Dish",
    productImgUrl: "../../../assets/images/biryani.png",
    productPrice: 350,
    productDescription: "A delicious and flavorful rice dish made with spices, meat, and vegetables.",
    rating:4.4
  }),

  new Product({
    productName: "Pasta Manchurian",
    productSubtitle: "Indo-Chinese Fusion Dish",
    productImgUrl: "../../../assets/images/pasta_manchurian.png",
    productPrice: 280,
    productDescription: "An innovative fusion of Italian pasta with spicy Manchurian sauce.",
    rating:4.7
  }),
  new Product({
    productName: "Chicken Plate",
    productSubtitle: "Grilled Chicken with Sides",
    productImgUrl: "../../../assets/images/chicken-plate.png",
    productPrice: 400,
    productDescription: "A hearty plate of grilled chicken served with your choice of sides.",
    rating:4.8
  }),

  new Product({
    productName: "Veg Biryani",
    productSubtitle: "Flavorful Rice Dish",
    productImgUrl: "../../../assets/images/veg_biryani.png",
    productPrice: 250,
    productDescription: "A delicious and aromatic rice dish cooked with mixed vegetables and spices.",
    rating:4.7
  }),

  new Product({
    productName: "Fish Curry",
    productSubtitle: "Spicy Fish Dish",
    productImgUrl: "../../../assets/images/fish-curry.png",
    productPrice: 350,
    productDescription: "A spicy and tangy fish curry made with fresh fish and aromatic spices.",
    rating:4.5
  }),
 
  new Product({
    productName: "Green Salad",
    productSubtitle: "Fresh Salad Bowl",
    productImgUrl: "../../../assets/images/green-salad.png",
    productPrice: 200,
    productDescription: "A refreshing bowl of mixed greens, vegetables, and dressing.",
    rating:5.0
  }),
  new Product({
    productName: "Paneer Plate",
    productSubtitle: "Paneer with Sides",
    productImgUrl: "../../../assets/images/paneer-plate.png",
    productPrice: 300,
    productDescription: "A delightful plate of paneer served with your choice of sides.",
    rating:4.4
  }),

  new Product({
    productName: "Cheese Pizza",
    productSubtitle: "Cheesy Pizza",
    productImgUrl: "../../../assets/images/cheese_pizza.png",
    productPrice: 320,
    productDescription: "A classic pizza topped with generous amounts of cheese.",
    rating:4.9
  }),

  new Product({
    productName: "French Fries",
    productSubtitle: "Crispy Potato Fries",
    productImgUrl: "../../../assets/images/french-fries.png",
    productPrice: 150,
    productDescription: "Crispy and golden potato fries seasoned to perfection.",
    rating:4.1
  }),

  ]

  }


    getTopProduct(){
      return this.allProduct.filter(val=>val.rating>=4.5);
    }

    searchProduct(){
      return this.allProduct.filter(obj => obj.productName.toLocaleLowerCase().includes(this.keySearch.toLocaleLowerCase()));
    }
}
