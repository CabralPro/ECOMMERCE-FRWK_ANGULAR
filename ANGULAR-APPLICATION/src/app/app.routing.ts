import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ViewShowcaseProductsComponent } from './views/market-place/view-showcase-products/view-showcase-products.component';
import { ViewAdminComponent } from './views/admin/view-admin/view-admin.component';
import { ViewShoppingCartComponent } from './views/market-place/view-shopping-cart/view-shopping-cart.component';

const routes: Routes = [
  { path: '', component: ViewAdminComponent },
  { path: 'showcase-products', component: ViewShowcaseProductsComponent },
  { path: 'shopping-cart', component: ViewShoppingCartComponent },
  { path: 'admin', component: ViewAdminComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule { }
