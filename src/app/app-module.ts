import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SneakerList } from './sneaker-list/sneaker-list';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SneakerHouseAbout } from './sneaker-house-about/sneaker-house-about';
import { SneakerHouseSneaker } from './sneaker-house-sneaker/sneaker-house-sneaker';
import { Cart } from './cart/cart';
import { InputInteger } from './input-integer/input-integer';
import { Form } from './form/form';
import { ReactiveFormsModule } from '@angular/forms';
import { SneakerDetail } from './sneaker-detail/sneaker-detail';

@NgModule({
  declarations: [
    App,
    SneakerList,
    SneakerHouseAbout,
    SneakerHouseSneaker,
    Cart,
    InputInteger,
    Form,
    SneakerDetail,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule { }
