import { Injectable } from '@angular/core';
import { iCustomer } from './customer/customer.model';
import { Subscriber, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';
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

  //http://localhost:57613/Values/GetById?uid

  getCustomerById(id:number): Observable<iCustomer>{
    console.log(id);
    const headers= { 'Content-Type': 'application/json' }
    return this.http.get<iCustomer>('http://localhost:57613/Values/GetById?uid='+id,{'headers':headers});
  }

  //http://localhost:57613/Values/CreateCustomer
  createCustomer(customer:iCustomer): Observable<any> {
    const raw={id:1};
     //const headers= { 'Content-Type': 'application/json' }
    //console.log(customer);
    //let input = {value: customer}
    //return this.http.post<iCustomer>('http://localhost:57613/Values/CreateCustomer',customer,{'headers':headers});
    const customerStr=JSON.stringify(customer);
    console.log(customer);
    return this.http.post<iCustomer>('http://localhost:57613/Values/CreateCustomer',customerStr,{
      headers: new HttpHeaders().set('pragma','no-cache').set('Content-Type','application/json')});
   //eturn this.http.post('http://localhost:57613/Values/CreateCustomer',customer);
     }

  deleteCustomer(id: number): Observable<iCustomer> {
    const headers= { 'Content-Type': 'application/json' }
    return this.http.delete<iCustomer>('http://localhost:57613/Values/DeleteData?uid='+id,{'headers':headers});
      }

  updateCustomer(customer: iCustomer): Observable<iCustomer> {
    //console.log('value' + id);
    console.log(customer);
    const headers= { 'Content-Type': 'application/json' }
    return this.http.put<iCustomer>(
      'http://localhost:57613/Values/UpdateData',customer,{'headers':headers}
    );
  }
}
