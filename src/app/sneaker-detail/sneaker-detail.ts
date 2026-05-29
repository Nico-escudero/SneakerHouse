import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SneakerData } from '../sneaker-data';
import { SneakerCart } from '../sneaker-cart';
import { Sneaker } from '../sneaker-list/sneaker';

@Component({
  selector: 'app-sneaker-detail',
  standalone: false,
  templateUrl: './sneaker-detail.html',
  styleUrl: './sneaker-detail.scss',
})
export class SneakerDetail {

  sneaker?: Sneaker;
  alertMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private sneakerService: SneakerData,
    private cart: SneakerCart,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.sneakerService.getAll().subscribe(sneakers => {
      this.sneaker = sneakers.find(s => s.id === id);
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