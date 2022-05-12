import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasketsPageComponent } from './pages/baskets-page/baskets-page.component';
import { DetailProductPageComponent } from './pages/detail-product-page/detail-product-page.component';
import { MarketsPageComponent } from './pages/markets-page/markets-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'markets_page' },
  { path: 'markets_page', component: MarketsPageComponent},
  { path: 'baskets_page', component: BasketsPageComponent},
  { path: 'detail_product_page', component: DetailProductPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
