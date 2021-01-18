import { Injectable } from '@angular/core';
import { iCustomer } from './customer/customer.model';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  serCustomer: iCustomer[] = [
    {
      id: 1,
      firstName: 'Abhishek',
      lastName: 'Tyagi',
      address: 'xyz',
      gender: 'Male',
      email: '123@xyz.com',
      city: 'Ghaziabad',
      state: 'U.P',
      orderTotal: 10000,
    },
    {
      id: 2,
      firstName: 'Siddhant',
      lastName: 'Tiwari',
      address: 'abc',
      gender: 'Male',
      email: '456@xyz.com',
      city: 'Ghaziabad',
      state: 'U.P',
      orderTotal: 50000,
    },
    {
      id: 3,
      firstName: 'Kajal',
      lastName: 'Sharma',
      address: 'pqr',
      gender: 'Female',
      email: '456@xyz.com',
      city: 'New Delhi',
      state: 'Delhi',
      orderTotal: 80000,
    },
    {
      id: 4,
      firstName: 'Anurag',
      lastName: 'Thakur',
      address: 'mno',
      gender: 'Male',
      email: 'mno@xyz.com',
      city: 'Bhopal',
      state: 'M.P',
      orderTotal: 10000,
    },
  ];
  getCustomer() {
    return this.serCustomer;
  }

  post(customer: iCustomer) {
    return this.serCustomer.push(customer);
  }
  delete(id: number) {
    let customer = this.serCustomer.find((x) => x.id === id);
    let index = this.serCustomer.indexOf(customer, 0);
    this.serCustomer.splice(index, 1);
  }

  onGetCustomer(id: number) {
    return this.serCustomer.find((x) => x.id === id);
  }
  onUpdate(customer: iCustomer) {
    let oldcustomer = this.serCustomer.find((x) => x.id === customer.id);
    oldcustomer.firstName = customer.firstName;
    oldcustomer.lastName = customer.lastName;
    oldcustomer.address = customer.address;
    oldcustomer.gender = customer.gender;
    oldcustomer.email = customer.email;
    oldcustomer.city = customer.city;
    oldcustomer.state = customer.state;
    oldcustomer.orderTotal = customer.orderTotal;
  }
}
