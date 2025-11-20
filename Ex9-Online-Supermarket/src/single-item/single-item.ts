import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../dto/item';
import { CurrencyPipe } from '@angular/common'; //For Pipes 

@Component({
  selector: 'app-single-item',
  imports: [CurrencyPipe],
  templateUrl: './single-item.html',
  styleUrl: './single-item.css',
})
export class SingleItem {

  @Input({required:true})item!:Item;
  @Output() price:EventEmitter<number> = new EventEmitter();
  
  sendToTotal(){
      this.price.emit(this.item.Price);
  }
  
}
