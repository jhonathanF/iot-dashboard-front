import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent }
];
