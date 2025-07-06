import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderComponent,
    RouterModule.forChild(
      [
        {path: "", component: OrderComponent}
      ]
    )
  ]
})
export class OrderModule { }
