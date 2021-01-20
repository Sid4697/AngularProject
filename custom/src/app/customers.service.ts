import { Injectable } from '@angular/core';
import { iCustomer } from './customer/customer.model';
import { Subscriber, Observable } from 'rxjs';
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

  //http://localhost:57613/Values/GetAll
  getCustomer(): Observable<iCustomer[]> {
    let serCustomer = this.http.get<iCustomer[]>(
      'http://localhost:57613/Values/GetAll'
    );
    return serCustomer;
  }

  //http://localhost:57613/Values/CreateCustomer
  createCustomer(customer: iCustomer): Observable<iCustomer> {
    console.log(customer);
    return this.http.post<iCustomer>(
      'http://localhost:57613/Values/CreateCustomer',{
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),body:customer
      }
    );
  }

  deleteCustomer(id: number): Observable<iCustomer> {
    return this.http.delete<iCustomer>(
      'http://localhost:57613/Values/DeleteData?uid=' +
        {
          headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
          body: id,
        }
    );
  }

  updateCustomer(id: number, customer: iCustomer): Observable<iCustomer> {
    console.log('value' + id);
    console.log(customer);
    return this.http.put<iCustomer>(
      'http://localhost:57613/Values/DeleteData?uid=' + id,
      {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        body: customer,
      }
    );
  }
}
