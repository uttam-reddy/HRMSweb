import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductdashboardComponent } from './productdashboard/productdashboard.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'',component:ProductdashboardComponent }
];
@NgModule({
  declarations: [
    ProductdashboardComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class ProductDashboardModule { }
