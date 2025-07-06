import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    LayoutComponent,
    
  ],
  exports: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
