import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../../interfaces/Customer';
import { ICustomerRepository } from '../../../interfaces/Customer-Repository';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // Dependency Inversion Principle, High level modules should not depend on low level modules
  constructor(
    private customerRepository: ICustomerRepository
  ) {}

  getCustomerDetails(): Observable<Customer[]> {
    return this.customerRepository.getCustomers();
  }
}
