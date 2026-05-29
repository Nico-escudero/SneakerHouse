import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SneakerData } from '../sneaker-data';
import { Sneaker } from '../sneaker-list/sneaker';

@Component({
  selector: 'app-sneaker-detail',
  standalone: false,
  templateUrl: './sneaker-detail.html',
  styleUrl: './sneaker-detail.scss',
})
export class SneakerDetail {

  sneaker?: Sneaker;

  constructor(
    private route: ActivatedRoute,
    private sneakerService: SneakerData,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.sneakerService.getAll().subscribe(sneakers => {
      this.sneaker = sneakers.find(s => s.id === id);
      this.cdr.detectChanges();
    });
  }
}