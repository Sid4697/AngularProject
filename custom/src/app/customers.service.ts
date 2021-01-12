import { Injectable } from '@angular/core';
import { Customer } from './customer/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  serCustomer: Customer[] = [
    new Customer(
      'Abhishek',
      'Tyagi',
      'xyz',
      'Male',
      '123@xyz.com',
      'Ghaziabad',
      'U.P',
      10000
    ),
    new Customer(
      'Siddhant',
      'Tiwari',
      'abc',
      'Male',
      '420@xyz.com',
      'Ghaziabad',
      'U.P',
      100000
    ),
    new Customer(
      'Kajal',
      'Sharma',
      'pqr',
      'Female',
      '9211@xyz.com',
      'New Delhi',
      'Delhi',
      8000
    ),
    new Customer(
      'Anurag',
      'Thakur',
      'mno',
      'Male',
      'abc@xyz.com',
      'Bhopal',
      'M.P',
      10000
    ),
  ];

  getCustomer() {
    return this.serCustomer;
  }
}
