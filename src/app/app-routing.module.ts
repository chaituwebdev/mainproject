import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerformComponent } from './customerform/customerform.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { Customerform2Component } from './customerform2/customerform2.component';


const routes: Routes = [
  {path:'customerDetails',component:CustomerdetailsComponent},
  {path:'customerForm',component:CustomerformComponent},
  {path:'customerForm2',component:Customerform2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
