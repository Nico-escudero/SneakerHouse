import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SneakerHouseSneaker } from './sneaker-house-sneaker/sneaker-house-sneaker';
import { SneakerHouseAbout } from './sneaker-house-about/sneaker-house-about';
import { Form } from './form/form';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SneakerHouseSneaker
  }, {
    path: 'about',
    component: SneakerHouseAbout
  }, {
    path: 'newSneaker',
    component: Form
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
