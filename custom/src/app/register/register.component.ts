import { routing } from './../app-routing.module';
import { Customer } from './../customer/customer.model';
import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // @Output() tableDataValues = new EventEmitter<string>();

  constructor(private service: CustomersService, private router: Router) {}

  ngOnInit(): void {}

  submitLoginForm(form: NgForm) {
    var custom = new Customer(
      form.value.firstName,
      form.value.lastName,
      form.value.address,
      form.value.gender,
      form.value.email,
      form.value.city,
      form.value.state,
      form.value.orderTotal
    );
    this.service.serCustomer.push(custom);
    this.router.navigate(['/customer']);
    //this.tableDataValues.emit(form.value);
    //console.log(form.value.firstName);
    //console.log(form.value.lastName);
    //console.log(form.value.gender);
    //console.log(form.value.email);
    //console.log(form.value.address);
    //console.log(form.value.city);
    //console.log(form.value.state);
  }
  Submit() {
    this.router.navigate['/customer'];
  }
}
