import { Pipe, PipeTransform } from '@angular/core';
import { iCustomer } from './customer.model';

@Pipe({
  name: 'customerFilter',
})
export class CustomerFilterPipe implements PipeTransform {
  transform(customer: iCustomer[], searchTerm: string): iCustomer[] {
    if (!customer || !searchTerm) {
      return customer;
    }

    return customer.filter(
      (c) => c.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
    );
  }
}
