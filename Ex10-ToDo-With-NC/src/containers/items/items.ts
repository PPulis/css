import { Component } from '@angular/core';
import { Item } from '../../models/item.dto';
import { ItemsComponent } from "../../components/items/items";

@Component({
  selector: 'items-container',
  templateUrl: './items.html',
  styleUrls: ['./items.css'],
  imports: [ItemsComponent]
})
export class ItemsContainer {
  items: Item[] = [
    { id: 1, title: 'Buy groceries', description: 'Milk, Bread, Eggs, Cheese', completed: false },
    { id: 2, title: 'Read a book', description: 'Finish reading Angular documentation', completed: false },
    { id: 3, title: 'Workout', description: '30 minutes of cardio', completed: true }
  ];

  onEditItem(item: Item) {
    // Implement edit logic here
    console.log('Edit item:', item);
  }

  onDeleteItem(item: Item) {
    // Implement delete logic here
    this.items = this.items.filter(i => i.id !== item.id);
  }
}
