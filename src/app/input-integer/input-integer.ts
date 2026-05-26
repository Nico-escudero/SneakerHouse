import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sneaker } from '../sneaker-list/sneaker';
import { EmitterVisitorContext } from '@angular/compiler';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss',
})
export class InputInteger {

  @Input()
  quantity: number;

  @Input()
  max: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();


  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('Se alcanzó el stock máximo disponible');
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit('La cantidad no puede ser menor a 0');
    }
  }

  changeQuantity(event: KeyboardEvent): void {

    if ((event.key >= '1' && event.key <= '9') && (event.key <= this.max.toString())) {
      console.log(event.key);
      this.quantity = parseInt(event.key);
    } else {
      event.preventDefault();
    }
  }

  
}

