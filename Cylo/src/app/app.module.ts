import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserConfirmOrderComponent } from './user-confirm-order/user-confirm-order.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ProductsComponent } from './products/products.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    UserLoginComponent,
    UserProfileComponent,
    UserConfirmOrderComponent,
    UserRegisterComponent,
    ProductsComponent,
    ProductCardComponent,
    AdminLoginComponent,
    ForgotPasswordComponent,
    ViewUsersComponent,
    ViewOrdersComponent,
    AdminProductsComponent,
    AdminProfileComponent,
    AdminNavbarComponent,
    AdminRegisterComponent,
    AddProductComponent,
    EditProductComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
