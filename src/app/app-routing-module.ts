import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakerHouseSneaker } from './sneaker-house-sneaker/sneaker-house-sneaker';
import { SneakerHouseAbout } from './sneaker-house-about/sneaker-house-about';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sneakers',
    pathMatch: 'full'
  },
  {
    path: 'sneakers',
    component: SneakerHouseSneaker
  }, {
    path: 'about',
    component: SneakerHouseAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
