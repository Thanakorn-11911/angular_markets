import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarketsPageComponent } from './pages/markets-page/markets-page.component';
import { BasketsPageComponent } from './pages/baskets-page/baskets-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component'

@NgModule({
  declarations: [
    AppComponent,
    MarketsPageComponent,
    BasketsPageComponent,
    DetailProductPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
