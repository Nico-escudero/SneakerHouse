import { Component } from '@angular/core';
import { Sneaker } from './sneaker';
import { SneakerCart } from '../sneaker-cart';
import { SneakerData } from '../sneaker-data';

@Component({
  selector: 'app-sneaker-list',
  standalone: false,
  templateUrl: './sneaker-list.html',
  styleUrl: './sneaker-list.scss',
})
export class SneakerList {
  sneakers: Sneaker[] = [];

  constructor(private cart: SneakerCart, private sneakerDataService: SneakerData) {
  }

  ngOnInit(): void {
    this.sneakerDataService.getAll().subscribe(sneakers =>
      this.sneakers = sneakers);
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
