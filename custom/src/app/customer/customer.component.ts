import { routing } from './../app-routing.module';
import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  
  customers;
  searchTerm;

     constructor(service: CustomersService,private router: Router)
     {
        this.customers=service.getCustomer();
        
     }
     addCustomer(){
      this.router.navigate(['/register']);
     }
     


     
  ngOnInit() {
    
  }


}
