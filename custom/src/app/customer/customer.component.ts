import { Component, OnInit } from '@angular/core';
import {Customer} from './customer.model'

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  filterCustomer: Customer[];
  customers: Customer[] = [
    new Customer('Abhishek','Tyagi','xyz','Male','Ghaziabad','U.P',10000),
    new Customer('Siddhant','Tiwari','abc','Male','Ghaziabad','U.P',100000),
    new Customer('Kajal','Sharma','pqr','Female','New Delhi','Delhi',8000),
    new Customer('Anurag','Thakur','mno','Male','Bhopal','M.P',10000)
  ];
  searchCustomer(value: string)
  { 
    if(value!=null || value=="")
    {
    this.filterCustomer=this.customers.filter(c =>c.firstName.toLowerCase().indexOf(value.toLowerCase())>=0);
  }
  }

  constructor() { }

  ngOnInit(): void {
    this.filterCustomer=this.customers;
  }

}
