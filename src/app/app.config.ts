import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { CustomerRepository } from './services/customer-service/customer-repository';
import { ICustomerRepository } from '../interfaces/Customer-Repository';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    // Dependency Injection to follow Dependency Inversion Principle
    // High level modules should not depend on low level modules
    {
      provide: ICustomerRepository,
      useClass: CustomerRepository
    }
  ]
};
