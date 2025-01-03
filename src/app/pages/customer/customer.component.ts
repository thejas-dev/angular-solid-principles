import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer-service/customer-service.service';
import { NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [NgFor,NgForOf],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {
  public customers: any = [];

  constructor(public customerService: CustomerService) {}

  ngOnInit() {
    this.customerService.getCustomerDetails().subscribe(customers => {
      this.customers = customers;
    });
  }

}
