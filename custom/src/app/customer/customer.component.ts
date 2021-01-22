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
  value;

  constructor(private service: CustomersService, private router: Router) {}

  

  addCustomer() {
    this.router.navigate(['/add/0']);
  }
  

  ngOnInit() {
    this.service.getCustomer().subscribe(response=>{this.customer=response});
  
  }
  onDelete(id:number){
    this.service.deleteCustomer(id).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
    window.location.reload();
  }
}
