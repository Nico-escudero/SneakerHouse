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

@NgModule({
  declarations: [App, SneakerList, SneakerHouseAbout, SneakerHouseSneaker, Cart, InputInteger],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule { }
