import { Injectable } from '@angular/core';
import { Sneaker } from './sneaker-list/sneaker';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SneakerCart {

  private _cartList: Sneaker[] = [];
  cartList: BehaviorSubject<Sneaker[]> = new BehaviorSubject<Sneaker[]>([]);

  addTocart(sneaker: Sneaker) {
    let item: Sneaker | undefined = this._cartList.find((v1) => v1.name === sneaker.name);
    if (!item) {
      this._cartList.push({ ...sneaker });
    } else {
      item.quantity += sneaker.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
