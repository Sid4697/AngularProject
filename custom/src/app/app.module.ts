import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersService } from './customers.service';
import { CustomerFilterPipe } from './customer/customer-filter.pipe';
import { routing } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import {Ng2OrderModule} from 'ng2-order-pipe'
import {NgxPaginationModule} from 'ngx-pagination'




@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RegisterComponent,
    CustomerFilterPipe,
    EditCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    routing,
    Ng2OrderModule,
    NgxPaginationModule,
  ],
  providers: [HttpClientModule,CustomersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
