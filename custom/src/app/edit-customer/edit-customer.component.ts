import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { iCustomer } from '../customer/customer.model';
import { CustomersService } from '../customers.service';
import { NgbModalConfig,ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  selectedCustomer:iCustomer;
  editForm: FormGroup;
  isLoading = false;
  constructor(public modal: NgbActiveModal, private route: ActivatedRoute, private service:CustomersService, private formBuilder: FormBuilder, private router: Router) { }
 
  ngOnInit() {
 
    this.setForm()
  }
 
  
 
  get editFormData() { return this.editForm.controls; }

  onSubmit() {
    if (this.editForm.invalid || this.isLoading) {
      return;
    }
    this.isLoading = true;
    this.service.updateCustomer(this.editForm.value).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes Click');
    },
      error => {
        this.isLoading = false;
      });
  }
 
       setForm() {
    console.log(this.selectedCustomer);
     
    this.editForm = this.formBuilder.group({
      id: [this.selectedCustomer.id],
      firstName: [this.selectedCustomer.firstName, Validators.required],
      lastName: [this.selectedCustomer.lastName, Validators.required],
      address: [this.selectedCustomer.address, Validators.required],
      gender: [this.selectedCustomer.gender, Validators.required],
      email: [{ value: this.selectedCustomer.email, disabled: true }, [Validators.email, Validators.required]],
      city: [this.selectedCustomer.city, Validators.required],
      state: [this.selectedCustomer.state, Validators.required],
      country: [this.selectedCustomer.country, Validators.required]
    });
  }
}
