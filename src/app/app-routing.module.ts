import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddprodComponent } from './addprod/addprod.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { MailComponent } from './mail/mail.component';
import { OrdersComponent } from './orders/orders.component';
import { SupportComponent } from './support/support.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication',
    pathMatch: 'full'
  }, {
    path: 'authentication',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomeComponent


  }, {
    path: 'manage-users',
    component: UsersComponent
  }, {
    path: 'support',
    component: SupportComponent
  },
  {
    path: 'manage-orders',
    component: OrdersComponent
  },
  {
    path: 'add-prod',
    component: AddprodComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
