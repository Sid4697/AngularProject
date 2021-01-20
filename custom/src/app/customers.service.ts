import { Injectable } from '@angular/core';
import { iCustomer } from './customer/customer.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  //serCustomer: iCustomer[] = []
  //getCustomer() {
  //return this.serCustomer;
  //}

  //post(customer: iCustomer) {
  //return this.serCustomer.push(customer);
  //}
  //delete(id: number) {
  //let customer = this.serCustomer.find((x) => x.id === id);
  //let index = this.serCustomer.indexOf(customer, 0);
  //this.serCustomer.splice(index, 1);
  //}

  //onGetCustomer(id: number) {
  //return this.serCustomer.find((x) => x.id === id);
  //}
  //onUpdate(customer: iCustomer) {
  //let oldcustomer = this.serCustomer.find((x) => x.id === customer.id);
  //oldcustomer.firstName = customer.firstName;
  //oldcustomer.lastName = customer.lastName;
  //oldcustomer.address = customer.address;
  //oldcustomer.gender = customer.gender;
  //oldcustomer.email = customer.email;
  //oldcustomer.city = customer.city;
  //oldcustomer.state = customer.state;
  //oldcustomer.orderTotal = customer.orderTotal;
  //}

  constructor(private http: HttpClient) {}

  getCustomer(): Observable<iCustomer[]> {
    let serCustomer = this.http.get<iCustomer[]>(
      'http://localhost:57613/Values/GetAll'
    );
    return serCustomer;
  }

  createCustomer(customer: iCustomer): Observable<iCustomer> {
    return this.http.post<iCustomer>(
      'http://localhost:57613/Values/CreateCutomer',
      customer,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    );
  }
}
