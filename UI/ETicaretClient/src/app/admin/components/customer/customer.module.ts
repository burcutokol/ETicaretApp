import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    CustomerComponent,
    RouterModule.forChild([
      {path: "", component: CustomerComponent},
      
    ])
  ]
})
export class CustomerModule { }
