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
  cust: iCustomer = {id: null,firstName: '',lastName: '',address: '',gender: '',email: '',city: '',state: '',country: '',};
  value: any;

  showModal: boolean;
  submitted = false;
  selectedCountry: string='';
  alert:boolean=false;
  updateAlert:boolean=false;
  deleteAlert:boolean=false;

  p:number=1;
   country_list = [{id: '1', name: 'Afghanistan'},{id: '2', name: 'Albania'},{id: '3', name: 'Algeria'},{id: '4', name: 'Andorra'},{id: '5', name: 'Angola'},{id: '6', name: 'Anguilla'},{id: '7', name: 'Antigua & Barbuda'},{id: '8', name: 'Argentina'},{id: '9', name: 'Armenia'},{id: '10', name: 'Aruba'},{id: '11', name: 'Australia'},{id: '12', name: 'Austria'},{id: '13', name: 'Azerbaijan'},{id: '14', name: 'Bahamas'},{id: '15', name: 'Bahrain'},{id: '16', name: 'Bangladesh'},{id: '17', name: 'Barbados'},{id: '18', name: 'Belasur'},{id: '19', name: 'Belgium'},{id: '20', name: 'Belize'},{id: '21', name: 'Benin'},{id: '22', name: 'Bermuda'},{id: '23', name: 'Bhutan'},{id: '24', name: 'Bolivia'},{id: '25', name: 'Bosnia'},{id: '26', name: 'Botswana'},{id: '27', name: 'Brazil'},{id: '28', name: 'British Indian Ocean Ter'},{id: '29', name: 'Brunei'},{id: '30', name: 'Bulgaria'},{id: '31', name: 'Burkina Faso'},{id: '32', name: 'Burundi'},{id: '33', name: 'Cambodia'},{id: '34', name: 'Cameroon'},{id: '35', name: 'Cape Verde'},{id: '36', name: 'Cayman Islands'},{id: '37', name: 'Chad'},{id: '38', name: 'Chile'},{id: '39', name: 'China'},{id: '40', name: 'Colombia'},
{id: '41', name: 'Congo'},{id: '42', name: 'Cook Islands'},{id: '43', name: 'Costa Rica'},{id: '44', name: 'Cote D Ivoire'},{id: '45', name: 'Crotia'},{id: '46', name: 'Cruise Ship'},{id: '47', name: 'Cuba'},{id: '48', name: 'Cyprus'},{id: '49', name: 'Czech Republic'},{id: '50', name: 'Denmark'},{id: '51', name: 'Djibouti'},{id: '52', name: 'Dominica'},{id: '53', name: 'Dominican Republic'},{id: '54', name: 'Ecuador'},{id: '55', name: 'Egypt'},{id: '56', name: 'El Salvador'},{id: '57', name: 'Equatorial Guinea'},{id: '58', name: 'Estonia'},{id: '59', name: 'Ethiopia'},{id: '60', name: 'Falkland Islands'},{id: '61', name: 'Benin'},{id: '62', name: 'Faroe Islands'},{id: '63', name: 'Fiji'},{id: '64', name: 'Finland'},{id: '65', name: 'France'},{id: '66', name: 'French Polynesia'},{id: '67', name: 'French West Indies'},{id: '68', name: 'Gabon'},{id: '69', name: 'Gambia'},{id: '70', name: 'Georgia'},{id: '71', name: 'Germany'},{id: '72', name: 'Ghana'},{id: '73', name: 'Gibraltar'},{id: '74', name: 'Greece'},{id: '75', name: 'Greenland'},{id: '76', name: 'Grenada'},{id: '77', name: 'Guam'},{id: '78', name: 'Guatemala'},{id: '79', name: 'Guernsey'},{id: '80', name: 'Guinea'},
{id: '81', name: 'Guinea Bissau'},{id: '82', name: 'Guyana'},{id: '83', name: 'Haiti'},{id: '84', name: 'Honduras'},{id: '85', name: 'Hong Kong'},{id: '86', name: 'Hungary'},{id: '87', name: 'Iceland'},{id: '88', name: 'India'},{id: '89', name: 'Indonesia'},{id: '90', name: 'Iran'},{id: '91', name: 'Iraq'},{id: '92', name: 'Ireland'},{id: '93', name: 'Isle of Man'},{id: '94', name: 'Isreal'},{id: '95', name: 'Italy'},{id: '96', name: 'Jamaica'},{id: '97', name: 'Japan'},{id: '98', name: 'Jersey'},{id: '99', name: 'Jordan'},{id: '100', name: 'Kazakhstan'},{id: '101', name: 'Kenya'},{id: '102', name: 'Kuwait'},{id: '103', name: 'Kyrgyz Republic'},{id: '104', name: 'Laos'},{id: '105', name: 'Latvia'},{id: '106', name: 'Lebanon'},{id: '107', name: 'Lesotho'},{id: '108', name: 'Liberia'},{id: '109', name: 'Libya'},{id: '110', name: 'Liechtenstein'},{id: '111', name: 'Lithuania'},{id: '112', name: 'Luxerbourg'},{id: '113', name: 'Macau'},{id: '114', name: 'Macedonia'},{id: '115', name: 'Madagascar'},{id: '116', name: 'Malawi'},{id: '117', name: 'Malaysia'},{id: '118', name: 'Maldives'},{id: '119', name: 'Mali'},{id: '120', name: 'Malta'},
{id: '121', name: 'Mauritania'},{id: '122', name: 'Mauritius'},{id: '123', name: 'Mexico'},{id: '124', name: 'Moldova'},{id: '125', name: 'Monaco'},{id: '126', name: 'Mongolia'},{id: '127', name: 'Montenegro'},{id: '128', name: 'Montserrat'},{id: '129', name: 'Morocco'},{id: '130', name: 'Mozambique'},{id: '131', name: 'Namibia'},{id: '132', name: 'Nepal'},{id: '133', name: 'Netherlands'},{id: '134', name: 'Netherlands Antilles'},{id: '135', name: 'New Caledonia'},{id: '136', name: 'New Zealand'},{id: '137', name: 'Nicaragua'},{id: '138', name: 'Niger'},{id: '139', name: 'Nigeria'},{id: '140', name: 'Norway'},{id: '141', name: 'Oman'},{id: '142', name: 'Pakistan'},{id: '143', name: 'Palestine'},{id: '144', name: 'Panama'},{id: '145', name: 'Papua New Guinea'},{id: '146', name: 'Paraguay'},{id: '147', name: 'Peru'},{id: '148', name: 'Philippines'},{id: '149', name: 'Poland'},{id: '150', name: 'Portugal'},{id: '151', name: 'Puerto Rico'},{id: '152', name: 'Qatar'},{id: '153', name: 'Reunion'},{id: '154', name: 'Ronania'},{id: '155', name: 'Russia'},{id: '156', name: 'Rwanda'},{id: '157', name: 'Saint Pierre &amp;Miquelon'},{id: '158', name: 'Somoa'},{id: '159', name: 'San Marino'},{id: '160', name: 'Satellite'},
{id: '161', name: 'Saudi Arabia'},{id: '162', name: 'Senegal'},{id: '163', name: 'Serbia'},{id: '164', name: 'Seychelles'},{id: '165', name: 'Sierra Leone'},{id: '166', name: 'Singapore'},{id: '167', name: 'Slovakia'},{id: '168', name: 'Slovenia'},{id: '169', name: 'South Africa'},{id: '170', name: 'South Korea'},{id: '171', name: 'Spain'},{id: '172', name: 'Sri Lanka'},{id: '173', name: 'St kitts &amp; Nevis'},{id: '174', name: 'St Lucia'},{id: '175', name: 'St Vincent'},{id: '176', name: 'St. Lucia'},{id: '177', name: 'Sudan'},{id: '178', name: 'Suriname'},{id: '179', name: 'Swaziland'},{id: '180', name: 'Sweden'},{id: '181', name: 'Switzerland'},{id: '182', name: 'Syria'},{id: '183', name: 'Taiwan'},{id: '184', name: 'Tajikistan'},{id: '175', name: 'Tanzania'},{id: '186', name: 'Thailand'},{id: '187', name: 'Timor L Este'},{id: '188', name: 'Togo'},{id: '189', name: 'Tonga'},{id: '190', name: 'Trinidad &amp; Tobago'},{id: '191', name: 'Tunisia'},{id: '192', name: 'Turkey'},{id: '193', name: 'Turkmenistan'},{id: '194', name: 'Turks &amp; Caicos'},{id: '195', name: 'Uganda'},{id: '196', name: 'Ukraine'},{id: '197', name: 'United Arab Emirates'},{id: '198', name: 'United Kingdom'},{id: '199', name: 'United States of America'},{id: '200', name: 'Uruguay'},
{id: '201', name: 'Uzbekistan'},{id: '202', name: 'Venezuela'},{id: '203', name: 'Vietnam'},{id: '204', name: 'Virgin Islands(Brit)'},{id: '205', name: 'Virgin Islands(USA)'},{id: '206', name: 'Wake Island'},{id: '207', name: 'Wallis & Futana Is'},{id: '208', name: 'Yemen'},{id: '209', name: 'Zaire'},{id: '210', name: 'Zambia'},{id: '211', name: 'Zimbabwe'}
];
     
  constructor(private service: CustomersService, private router: Router,private arouter: ActivatedRoute,
  private modalService: NgbModal) {
setTimeout(() => {this.service.getCustomer().subscribe(response=>{this.customer=response});},100)
}

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
    setTimeout(()=>{window.location.reload();},50);
  }

submitLoginForm(form:NgForm) {
    var customer1: iCustomer = {
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
      this.service.createCustomer(customer1).subscribe(response=>{this.value=response},(error:any)=>console.log(error));  
      this.alert=true;
      setTimeout(() => {
   this.service.getCustomer().subscribe(response=>{this.customer=response});
  }, 500)
    }
      else
    {
      this.service.updateCustomer(customer1).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
     this.updateAlert=true; 
     setTimeout(() => {
   this.service.getCustomer().subscribe(response=>{this.customer=response});
  }, 500)
  //setTimeout(()=>{window.location.reload();},2000);
    }
      //this.router.navigate(['/customer']);
      this.submitted = true;
      
      if(this.submitted)
    {
      this.showModal = false;
    }
    this.service.getCustomer().subscribe(response=>{this.customer=response});
    //window.location.reload();
     setTimeout(() => {
   this.service.getCustomer().subscribe(response=>{this.customer=response});
  }, 500)
    }
    closeAlert()
    {
      this.alert=false;
      this.updateAlert=false;
      this.deleteAlert=false;
      //window.location.reload();
      setTimeout(()=>{window.location.reload();},100);
    }
    showDelete=false;
    delete(){
      this.showDelete=true;
    }
    cancel()
    {
      this.showDelete=false;
      setTimeout(()=>{window.location.reload();},100);
    }
    onDelete(id:number)
    {
      this.service.deleteCustomer(id).subscribe(response=>{this.value=response},(error:any)=>console.log(error));
      this.deleteAlert=true;
      this.showDelete=false;
      //window.location.reload();
      setTimeout(() => {
   this.service.getCustomer().subscribe(response=>{this.customer=response});
  }, 500)
    }
    key:string='id';
    reverse:boolean=false;
    sort(key)
    {
       this.key=key;
        this.reverse=!this.reverse;
    }

}
  

