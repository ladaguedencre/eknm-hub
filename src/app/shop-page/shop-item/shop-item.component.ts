import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemState } from '../../models/item';

@Component({
  selector: 'shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.css']
})
export class ShopItemComponent implements OnInit {

  @Input() item?: Item;

  constructor() { }

  ngOnInit(): void {
    const a = this.item;
  }

  setColor = () => {
    switch(this.item?.state) { 
      case ItemState.NotLeft: { 
        return {
          'color': 'red',
        };
      } 
      case ItemState.Preorder: { 
        return {
          'color': 'yellow',
        };
      } 
      default: { 
        return {
          'color': 'white',
        };
      } 
    } 
  }

}