import { Injectable } from '@angular/core';
import { CartObject } from '../models/cartObject';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  orderedList:CartObject[]=[];

  pageStatus:boolean = false;

  totalAmount:number = 0;

  constructor() { }


  addProduct(obj:any){
    let userObj = new CartObject(obj);

    
    let data = this.orderedList.findIndex(vl=>{
        return (vl.productName === userObj.productName && vl.productSubtitle ===vl.productSubtitle);
    });
    
    if(data === -1){
      this.orderedList.push(userObj);
    }else{
      this.orderedList[data].quantity +=userObj.quantity;
    }
    
    this.calculateTotal();
    
  }

    updateProduct(obj:any,val:number){
      this.orderedList.forEach((ele,ind) => {
         if(ele.productName === obj.productName && ele.productSubtitle === obj.productSubtitle){
           ele.quantity = val;
         }
         if(ele.quantity === 0){
            this.orderedList.splice(ind,1);
         }
      });
      this.calculateTotal();
    }

    calculateTotal(){
      this.totalAmount = 0;
      this.orderedList.forEach(ele=>{
        this.totalAmount+=ele.productPrice*ele.quantity;
     })
    }

    getTotal(){
      this.calculateTotal();
      return this.totalAmount;
    }

    getOrderedList(){
      return this.orderedList;
    }
}
