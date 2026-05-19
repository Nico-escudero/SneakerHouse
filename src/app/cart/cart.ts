import { Component } from '@angular/core';
import { SneakerCart } from '../sneaker-cart';
import { Sneaker } from '../sneaker-list/sneaker';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartList$: Observable<Sneaker[]>;

  constructor(private cart: SneakerCart) {
    this.cartList$ = cart.cartList.asObservable();
  }
}
