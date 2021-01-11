import { Pipe,PipeTransform } from "@angular/core";
import { Customer } from "./customer.model";

@Pipe({
    name: 'customerFilter'
})

export class CustomerFilterPipe implements PipeTransform {
    transform(customers: Customer[],searchTerm: string): Customer[]
    {
         if(!customers || !searchTerm){
             return customers;
         }

    return customers.filter(c=>c.firstName.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}