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
    name: 'Jordan 1 Off White Chicago',
    type: 'Nike',
    price: 180,
    stock: 5,
    image: 'assets/img/Jordan-1-Off-White-chicago.webp',
    clearance: false,
    quantity: 0
  },
  {
    id: 2,
    name: 'Vans Knu',
    type: 'Vans',
    price: 200,
    stock: 3,
    image: 'assets/img/vansknu.webp',
    clearance: true,
    quantity: 0
  },
  {
    id: 3,
    name: 'Sb dunk Strangelove',
    type: 'Nike',
    price: 180,
    stock: 0,
    image: 'assets/img/sb-dunck-love.webp',
    clearance: false,
    quantity: 0
  },
  {
    id: 4,
    name: 'Jordan 1 Off White Blue',
    type: 'Nike',
    price: 190,
    stock: 2,
    image: 'assets/img/Jordan-1-Off-White-blue.webp',
    clearance: true,
    quantity: 0
  },
  {
    id: 5,
    name: 'Vans knu Marrones',
    type: 'Vans',
    price: 180,
    stock: 0,
    image: 'assets/img/vansknu-marrones.webp',
    clearance: false,
    quantity: 0
  },
  {
    id: 6,
    name: 'Sb dunk Travis Scott',
    type: 'Nike',
    price: 300,
    stock: 7,
    image: 'assets/img/Nike-SB-Dunk-Low-Travis-Scott.webp',
    clearance: false,
    quantity: 0
  },
  {
    id: 7,
    name: 'Jordan 1 Dia de los muertos',
    type: 'Nike',
    price: 190,
    stock: 2,
    image: 'assets/img/Jordan-1-dia-de-los-muertos.webp',
    clearance: true,
    quantity: 0
  },
  {
    id: 8,
    name: 'Vans knu verdes',
    type: 'Vans',
    price: 180,
    stock: 2,
    image: 'assets/img/vansknu-verde.webp',
    clearance: false,
    quantity: 0
  },
  {
    id: 9,
    name: 'Sb dunk Futura',
    type: 'Nike',
    price: 280,
    stock: 0,
    image: 'assets/img/Nike-SB-Dunk-futura.webp',
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

  alertMessage: string = '';

  maxReached(message: string): void {
    this.alertMessage = message;

    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }
}
