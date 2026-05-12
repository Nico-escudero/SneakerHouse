import { Component } from '@angular/core';
import { Sneaker } from './sneaker';

@Component({
  selector: 'app-sneaker-list',
  standalone: false,
  templateUrl: './sneaker-list.html',
  styleUrl: './sneaker-list.scss',
})
export class SneakerList {
  sneakers: Sneaker[] = [{
    id: 1,
    name: 'Jordan 1',
    type: 'Deportiva',
    price: 180,
    stock: 5,
    image: 'assets/img/jordan1.jpg',
    clearance: false,
    quantity: 0
  },
  {
    id: 2,
    name: 'Vans Knu',
    type: 'Urbanas',
    price: 200,
    stock: 3,
    image: 'assets/img/vansknu.jpg',
    clearance: true,
    quantity: 0
  },
  {
    id: 3,
    name: 'Converse Chuck',
    type: 'Clásicas',
    price: 180,
    stock: 0,
    image: 'assets/img/conversechuck.jpg',
    clearance: false,
    quantity: 0
  }];

  upQuantity(sneaker: Sneaker): void {
    if (sneaker.quantity < sneaker.stock) {
      sneaker.quantity++;
    }
  }

  downQuantity(sneaker: Sneaker): void {
    if (sneaker.quantity > 0) {
      sneaker.quantity--;
    }
  }

  changeQuantity(event: KeyboardEvent, sneaker: Sneaker): void {
    if ((event.key >= '1' && event.key <= '9') && (event.key <= sneaker.stock.toString())) {
      console.log(event.key);
    } else {
      event.preventDefault();
    }
  }
}
