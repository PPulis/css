import { Component} from '@angular/core';
import { Header } from "../header/header";
import { Item } from '../dto/item';
import { SingleItem } from "../single-item/single-item";
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, SingleItem, FormsModule, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  addToTotal(price: number) {
    this.total += price;
  }
  
  protected total:number = 0;
  protected items: Item[] = []; 

  ngOnInit(){
     this.items = [
      new Item(1, "Grapefruit",1),
      new Item(2, "Baguette", 2),
      new Item(3, "Soft Drink", 1.5)
    ]
    
  }

  protected resetTotal(){
    this.total = 0;
  }


  constructor(){
   
  }
}
