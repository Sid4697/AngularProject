import { iCustomer } from './customer.model';
import { routing } from './../app-routing.module';
import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { state } from '@angular/animations';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer: iCustomer[];
  searchTerm: string;
  image = 'Female';
  err;

  constructor(private service: CustomersService, private router: Router) {}

  getCustomers() {
    this.service.getCustomer().subscribe((c) => {
      this.customer = c;
    });
  }

  addCustomer() {
    this.router.navigate(['/add/0']);
  }
  onDelete(id: number) {
    this.service.deleteCustomer(id).subscribe(
      (responseCustomerData) => {
        if (responseCustomerData) {
          alert('Customer removed sucessfully.');
        }
      },
      (responseCustomerError) => {
        (this.err = responseCustomerError),
          console.log(this.err),
          alert(
            'Sorry, something went wrong. Please try again after sometime.'
          );
      },
      () => console.log('Delete method added successfully')
    );
  }

  ngOnInit() {
    this.getCustomers();
  }
}
