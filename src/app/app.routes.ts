import { Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { CustomerComponent } from './pages/customer/customer.component';

export const routes: Routes = [
    {
        path:'',
        component: MainPageComponent
    },
    {
        path:'customers',
        component: CustomerComponent
    }
];
