import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  submitLoginForm(form: NgForm) {
    console.log(form.value.firstName);
    console.log(form.value.lastName);
    console.log(form.value.gender);
    console.log(form.value.email);
    console.log(form.value.address);
    console.log(form.value.city);
    console.log(form.value.state);
    
  }

}
