import { Component } from '@angular/core';
import { Sneaker } from './sneaker';
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

}
