import { Component } from '@angular/core';
import { Sneaker } from './sneaker';
import { SneakerCart } from '../sneaker-cart';
import { SneakerData } from '../sneaker-data';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sneaker-list',
  standalone: false,
  templateUrl: './sneaker-list.html',
  styleUrl: './sneaker-list.scss',
})
export class SneakerList {
  sneakers: Sneaker[] = [];
  alertMessage: string = '';

  constructor(
    private cart: SneakerCart,
    private sneakerDataService: SneakerData,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.sneakerDataService.getAll().subscribe(sneakers => {
      this.sneakers = sneakers;
      this.cdr.detectChanges();
    });
  }
  addToCart(sneaker: Sneaker): void {
    if (sneaker.quantity > 0) {
      this.cart.addTocart(sneaker);
      sneaker.stock -= sneaker.quantity;
      sneaker.quantity = 0;
    } else {
      this.alertMessage = 'Debes seleccionar al menos 1 unidad';
    }
  }

  maxReached(message: string): void {
    this.alertMessage = message;

    setTimeout(() => {
      this.alertMessage = '';
    }, 3000);
  }
}
