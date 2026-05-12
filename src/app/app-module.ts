import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { SneakerList } from './sneaker-list/sneaker-list';
import { FormsModule } from '@angular/forms';
import { SneakerHouseAbout } from './sneaker-house-about/sneaker-house-about';
import { SneakerHouseSneaker } from './sneaker-house-sneaker/sneaker-house-sneaker';
import { Cart } from './cart/cart';

@NgModule({
  declarations: [App, SneakerList, SneakerHouseAbout, SneakerHouseSneaker, Cart],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners(), provideClientHydration(withEventReplay())],
  bootstrap: [App],
})
export class AppModule {}
