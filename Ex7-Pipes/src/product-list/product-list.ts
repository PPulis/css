import { CurrencyPipe, LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../dto/product';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, LowerCasePipe, CurrencyPipe, TitleCasePipe, DatePipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {

  //fields
  protected title: string = '';
  protected listFilter: string = "";
  protected products: Product[] = [];


  //methods
  public get filteredList() {
    return this.products.filter(p => p.Name.toLowerCase().includes(this.listFilter.toLowerCase()) || this.listFilter == "");
  }

  //events 
  ngOnInit() {
    this.title = 'Product List';
    this.products = [
      new Product('assets/images/shovel.jpeg', 'S1', 'Golden Shovel', 19.2555, new Date('March 19, 2021'), 3),
      new Product('assets/images/tractor.jpeg', 'T1', 'Tractor', 20000.345, new Date('March 19, 2021'), 3),
      new Product('assets/images/workbench.jpeg', 'W1', 'Workbench', 400.955, new Date('March 19, 2021'), 3),
    ];
  }

}
