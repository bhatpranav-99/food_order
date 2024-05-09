export class Product{
    productName!:string;
    productSubtitle!:string;
    productImgUrl!:string;
    productPrice!:number;
    productDescription!:string;
    rating!:number;


    constructor(obj:any){
        this.productName = obj.productName;
        this.productSubtitle = obj.productSubtitle;
        this.productImgUrl = obj.productImgUrl;
        this.productPrice = obj.productPrice;
        this.productDescription = obj.productDescription;
        this.rating = obj.rating;
    }
}