import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Product } from './product/product';

export const routes: Routes = [
    {
        path:"",component:Home
    },
    {
        path:"About",component:About
    },
     {
        path:"product",component:Product
    },
    {
        path:"Contact",component:Contact
    }
     
];