import { routing } from './../app-routing.module';
import { iCustomer } from './../customer/customer.model';
import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  header;
  id: number;
  err: string;
  customer: iCustomer = {
    id: null,
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    email: '',
    city: '',
    state: '',
    orderTotal: null,
  };

  constructor(
    private service: CustomersService,
    private router: Router,
    private arouter: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = +this.arouter.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add Employee' : 'Edit employee';

    if (this.id != 0) {
      //this.customer = this.service.onGetCustomer(this.id);
    }
  }

  submitLoginForm(form: NgForm) {
    console.log(form.value);
    var customer: iCustomer = {
      id: form.value.id,
      firstName: form.value.firstName,
      lastName: form.value.lastName,
      address: form.value.address,
      gender: form.value.gender,
      email: form.value.email,
      city: form.value.city,
      state: form.value.state,
      orderTotal: form.value.orderTotal,
    };
    if (this.id === 0) {
      //this.service.post(customer);
      this.service.createCustomer(customer).subscribe(
        (responseCustomerData) => {
          if (responseCustomerData) {
            alert('Customer added sucessfully.');
          }
        },
        (responseCustomerError) => {
          (this.err = responseCustomerError),
            console.log(this.err),
            alert(
              'Sorry, something went wrong. Please try again after sometime.'
            );
        },
        () => console.log('Customer method added successfully')
      );
    } else {
      //this.service.onUpdate(customer);
    }
    //this.service.post(customer);
    this.router.navigateByUrl('');
  }
}
