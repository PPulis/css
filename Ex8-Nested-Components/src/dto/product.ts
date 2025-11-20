export class Product{
    //fields
    private imagePreview :string;
    private code:string;
    private name:string;
    private unitPrice:number;
    private releaseDate: Date;
    private rating: number;

    //constants

    //constructor   
    constructor(imagePreview:string, code:string, name:string, unitPrice:number, releaseDate:Date, rating:number){
        this.imagePreview=imagePreview;
        this.code=code;
        this.name=name;
        this.unitPrice=unitPrice;
        this.releaseDate=releaseDate;
        this.rating = rating;
    }

    //getters 
    public get ImagePreview():string{
        return this.imagePreview;
    }
    public get Code():string{
        return this.code;
    }
    public get Name():string{
        return this.name;
    }
    public get UnitPrice():number{
        return this.unitPrice;
    }
    public get ReleaseDate():Date{
        return this.releaseDate;
    }
    public get Rating():number{
        return this.rating;
    }
  
    //setters
    public set ImagePreview(i:string){
        this.imagePreview = i;
    }
    public set Code(c:string){
        this.code = c
    }
    public set Name(n:string){
        this.name = n;
    }
    public set UnitPrice(u:number){
        this.unitPrice = u;
    }
    public set ReleaseDate(r:Date){
        this.releaseDate = r;
    }
    public set Rating(r:number){
        this.rating = r;
    }


    //methods 

    
} 