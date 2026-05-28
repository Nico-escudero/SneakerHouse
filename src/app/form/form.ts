import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { SneakerData } from '../sneaker-data';
import { Sneaker } from '../sneaker-list/sneaker';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.html',
  styleUrl: './form.scss',
})
export class Form {
  constructor(private sneakerData: SneakerData) { }
  successMessage = '';

  profileform = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(1), inputValidator]),
    stock: new FormControl('', [Validators.required, Validators.min(1), inputValidator]),
    image: new FormControl('', [Validators.required, httpsValidator]),
    clearance: new FormControl(false, [Validators.required]),
    quantity: new FormControl(0),
  });

  onSubmit() {
    if (this.profileform.invalid) return;

    const sneaker: Sneaker = {
      name: this.profileform.value.name!,
      type: this.profileform.value.type!,
      price: Number(this.profileform.value.price),
      stock: Number(this.profileform.value.stock),
      image: this.profileform.value.image!,
      clearance: !!this.profileform.value.clearance,
      quantity: 0,
    };

    this.sneakerData.addSneaker(sneaker).subscribe({
      next: () => {
        this.successMessage = 'Zapatilla cargada exitosamente';

        this.profileform.reset({
          clearance: false,
          quantity: 0,
        });

        setTimeout(() => {
          this.successMessage = '';
        }, 3000);
      },
      error: () => {
        this.successMessage = 'Algo salió mal. Intenta nuevamente.';
      },
    });
  }

  changeQuantity(event: KeyboardEvent) {
    const allowedKeys = [
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'Enter',
      'Delete',
      'Tab',
    ];

    const isNumber = /^[0-9]$/.test(event.key);
    const isAllowed = allowedKeys.includes(event.key);

    if (!isNumber && !isAllowed) {
      event.preventDefault();
    }
  }
}

export function httpsValidator(
  control: AbstractControl
): ValidationErrors | null {
  const value = control.value;

  if (!value) {
    return null;
  }

  return value.startsWith('https://')
    ? null
    : { invalidHttps: true };
}

export function inputValidator(
  control: AbstractControl
): ValidationErrors | null {

  if (control.value === '' || control.value === null) {
    return null;
  }

  const value = Number(control.value);

  return value >= 1
    ? null
    : { invalidInput: true };
}