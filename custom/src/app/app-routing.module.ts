import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent} from './register/register.component'
import {ModuleWithProviders} from '@angular/core'
import {CustomerComponent} from './customer/customer.component'


const routes: Routes = [
  { path:'register', component: RegisterComponent},
  { path:'', component: CustomerComponent},
  { path:'customer', component: CustomerComponent},
  { path:'**', component: CustomerComponent},
   ];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
