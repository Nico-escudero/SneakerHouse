import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneakerHouseSneaker } from './sneaker-house-sneaker';

describe('SneakerHouseSneaker', () => {
  let component: SneakerHouseSneaker;
  let fixture: ComponentFixture<SneakerHouseSneaker>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SneakerHouseSneaker],
    }).compileComponents();

    fixture = TestBed.createComponent(SneakerHouseSneaker);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
