import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../models/item.dto';
import { CommonModule } from '@angular/common';
import { NewLabelPipe } from '../../pipes/new-label.pipe';


@Component({
  selector: 'items',
  templateUrl: './items.html',
  styleUrls: ['./items.css'],
  imports: [ NewLabelPipe, CommonModule]
})
export class ItemsComponent {
  @Input() items: Item[] = [];
  @Output() editItem = new EventEmitter<Item>();
  @Output() deleteItem = new EventEmitter<Item>();

  onEditItem(item: Item) {
    this.editItem.emit(item);
  }

  onDeleteItem(item: Item) {
    this.deleteItem.emit(item);
  }
}
