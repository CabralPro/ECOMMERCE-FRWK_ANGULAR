import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { AppComponent } from './app.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { TemplateComponent } from './components/template/template.component';
import { FormComponent } from './components/_generics/form/form.component';
import { ButtonComponent } from './components/_generics/button/button.component';
import { TableProductsComponent } from './components/product/table-pruducts/table-products.component';
import { ViewAdminComponent } from './views/admin/view-admin/view-admin.component';
import { ViewShowcaseProductsComponent } from './views/market-place/view-showcase-products/view-showcase-products.component';
import { TableComponent } from './components/_generics/table/table.component';
import { ConfirmationComponent } from './components/_generics/confirmation/confirmation.component';
import { ProductFormComponent } from './components/product/product-form/product-form.component';
import { OverlayLoadingComponent } from './components/_generics/overlay-loading/overlay-loading.component';
import { ProductsDashboardComponent } from './components/product/products-dashboard/products-dashboard.component';
import { InputComponent } from './components/_generics/form/input/input.component';
import { CardComponent } from './components/_generics/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '@_generics/modal/modal.component';
import { ShowcaseProductsComponent } from '@_components/product/showcase-products/showcase-products.component';
import { CardShowcaseProductComponent } from '@_components/product/showcase-products/card-showcase-product/card-showcase-product.component';
import { DetailsBuyProductComponent } from '@_components/product/showcase-products/details-buy-product/details-buy-product.component';
import { ShoppingCartComponent } from '@_components/shopping-cart/shopping-cart.component';
import { ViewShoppingCartComponent } from './views/market-place/view-shopping-cart/view-shopping-cart.component';
import { LoginAdminComponent } from '@_components/admin/login-admin/login-admin.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatSnackBarModule,
    CurrencyMaskModule,
    NgbModule
  ],
  declarations: [
    AppComponent,
    TemplateComponent,
    FormComponent,
    InputComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ButtonComponent,
    TableProductsComponent,
    ViewAdminComponent,
    ViewShowcaseProductsComponent,
    TableComponent,
    ConfirmationComponent,
    ProductFormComponent,
    OverlayLoadingComponent,
    ProductsDashboardComponent,
		CardComponent,
		ModalComponent,
		ShowcaseProductsComponent,
		CardShowcaseProductComponent,
		DetailsBuyProductComponent,
		ShoppingCartComponent,
		ViewShoppingCartComponent,
		LoginAdminComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
