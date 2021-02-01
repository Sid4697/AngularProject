import { iCustomer } from './customer.model';
import { routing } from './../app-routing.module';
import { CustomersService } from './../customers.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { state } from '@angular/animations';
import { NgbModalConfig,ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { EditCustomerComponent } from '../edit-customer/edit-customer.component';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class CustomerComponent implements OnInit {
  customer: iCustomer[];
  searchTerm: string;
  image = 'Female';
   
  header;
  id: number;
  cust: iCustomer = {
    id: null,
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    email: '',
    city: '',
    state: '',
    country: '',
  };
  value: any;

  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  selectedCountry: string='';

   //country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
  
 constructor(private service: CustomersService, private router: Router,private arouter: ActivatedRoute,
  private modalService: NgbModal) {}

    ngOnInit() {
    
this.service.getCustomer().subscribe(response=>{this.customer=response});
    this.id = +this.arouter.snapshot.paramMap.get('id');
    this.header = this.id === 0 ? 'Add/Edit Customer' : 'Edit Customer';

    if (this.id != 0) {
      //this.customer = this.service.onGetCustomer(this.id);
      this.service.getCustomerById(this.id).subscribe(response=>{this.cust=response})
      //this.cust=this.data;
    }
}

selectChangeHandler(event:any){
  this.selectedCountry=event.target.value;
}

show1()
    {
      this.showModal=true;
    } 

    show(customer:iCustomer)
  {
    this.id=customer.id;
    this.cust.id= customer.id,
    this.cust.firstName=customer.firstName,
    this.cust.lastName=customer.lastName,
    this.cust.address=customer.address,
    this.cust.gender=customer.gender,
    this.cust.email=customer.email,
    this.cust.city=customer.city,
    this.cust.state=customer.state,
    this.cust.country=customer.country,
    this.showModal = true; // Show-Hide Modal Check
    }

  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
    window.location.reload();
    
  }

submitLoginForm(form:NgForm) {
    var customer: iCustomer = {
    id: form.value.id,
    firstName: form.value.firstName,
    lastName: form.value.lastName,
    address: form.value.address,
    gender: form.value.gender,
    email: form.value.email,
    city: form.value.city,
    state: form.value.state,
    country: form.value.country,
    };
    if (this.id === 0) {
      //this.service.post(customer);
      this.service.createCustomer(customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));  
      }
      else
    {
      this.service.updateCustomer(customer).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
      //this.id=0;
    }
      //this.router.navigate(['/customer']);
      this.submitted = true;
      if(this.submitted)
    {
      this.showModal = false;
      
    }
    window.location.reload();
    }

    showDelete=false;
    delete(){
      this.showDelete=true;
    }
    cancel()
    {
      this.showDelete=false;
      window.location.reload();
    }
    onDelete(id:number)
    {
      this.service.deleteCustomer(id).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
      this.showDelete=false;
      window.location.reload();
    }
    
   // get f() { return this.registerForm.controls; }
//onSubmit() {
    //this.submitted = true;
    // stop here if form is invalid
    //if (this.registerForm.invalid) {
      //  return;
    //}
    //if(this.submitted)
    //{
      //this.showModal = false;
      
    //}
   
  //}

}
  

