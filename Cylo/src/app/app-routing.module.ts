import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AuthGuard } from './guards/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { UserConfirmOrderComponent } from './user-confirm-order/user-confirm-order.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: UserLoginComponent,
  },
  {
    path: 'register',
    component: UserRegisterComponent,
  },
  {
    path: 'products/:id',
    component: ProductsComponent,
  },
  {
    path: 'userProfile/:id',
    canActivate: [AuthGuard],
    component: UserProfileComponent,
  },
  {
    path: 'confirmOrder/:id/:id2',
    component: UserConfirmOrderComponent,
  },
  {
    path: 'admin',
    component: AdminLoginComponent,
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'adminRegister',
    component: AdminRegisterComponent,
  },
  {
    path: 'adminProfile/:id',
    canActivate: [AuthGuard],
    component: AdminProfileComponent,
  },
  {
    path: 'confirmOrder/:id',
    component: UserConfirmOrderComponent,
  },
  {
    path: 'addProduct',
    component: AddProductComponent,
  },
  {
    path: 'adminProducts',
    component: AdminProductsComponent,
  },
  {
    path: 'updateProduct/:id',
    component: EditProductComponent,
  },
  {
    path: 'viewUser',
    component: ViewUsersComponent,
  },
  {
    path: 'viewOrders',
    component: ViewOrdersComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
