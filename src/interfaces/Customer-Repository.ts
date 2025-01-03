import { Observable } from "rxjs";
import { Customer } from "./Customer";

export abstract class ICustomerRepository {
    abstract getCustomers(): Observable<Customer[]>;
}