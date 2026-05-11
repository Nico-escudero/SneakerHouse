import { Component } from '@angular/core';

@Component({
  selector: 'app-sneaker-list',
  standalone: false,
  templateUrl: './sneaker-list.html',
  styleUrl: './sneaker-list.scss',
})
export class SneakerList {
  sneakers = [{
    "name": "Jordan 1",
    "type": "Deportiva",
    "price": 150,
    "stock": 10,
    "image": "assets/img/jordan1.jpg"
  },
  {
    "name": "Vans Knu",
    "type": "Urbanas",
    "price": 120,
    "stock": 15,
    "image": "assets/img/vansknu.jpg"
  },
  {
    "name": "Converse Chuck",
    "type": "Clásicas",
    "price": 100,
    "stock": 20,
    "image": "assets/img/conversechuck.jpg"
  }];
}
