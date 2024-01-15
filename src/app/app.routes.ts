import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BuyProccessComponent } from './components/buy-proccess/buy-proccess.component';

export const routes: Routes = [
    {component:HomeComponent,path:""},
    {component:BuyProccessComponent,path:"buy"}
];
