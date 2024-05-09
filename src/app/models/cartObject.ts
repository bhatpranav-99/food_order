
export class CartObject{

    productName!:string;
    productSubtitle!:string;
    productImgUrl!:string;
    productPrice!:number;
    productDescription!:string;
    quantity!:number;
    rating!:number;


    constructor(obj:any){
        this.productName = obj.productName;
        this.productSubtitle = obj.productSubtitle;
        this.productImgUrl = obj.productImgUrl;
        this.productPrice = obj.productPrice;
        this.productDescription = obj.productDescription;
        this.quantity = obj.quantity;
        this.rating = obj.rating;
    }
}