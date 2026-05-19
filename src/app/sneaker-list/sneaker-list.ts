import { Component } from '@angular/core';
import { Sneaker } from './sneaker';
import { SneakerCart } from '../sneaker-cart';

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

  constructor(private cart: SneakerCart) {
  }

  addToCart(sneaker: Sneaker): void {
    this.cart.addTocart(sneaker);
    sneaker.stock -= sneaker.quantity;
    sneaker.quantity = 0;
  }

  maxReached(message: string): void {
    alert(message);
  }
}
