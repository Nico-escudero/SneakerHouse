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
    name: 'Jordan 1',
    type: 'Deportiva',
    price: 180,
    stock: 5,
    image: 'assets/img/jordan1.jpg',
    clearance: false
  },
  {
    name: 'Vans Knu',
    type: 'Urbanas',
    price: 200,
    stock: 3,
    image: 'assets/img/vansknu.jpg',
    clearance: true
  },
  {
    name: 'Converse Chuck',
    type: 'Clásicas',
    price: 180,
    stock: 0,
    image: 'assets/img/conversechuck.jpg',
    clearance: false
  }];
}
