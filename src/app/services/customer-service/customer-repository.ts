import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Customer } from "../../../interfaces/Customer";
import { ICustomerRepository } from "../../../interfaces/Customer-Repository";

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  private customers: Customer[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Jack' }
  ];

  getCustomers(): Observable<Customer[]> {
    return of(this.customers);
  }
}