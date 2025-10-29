import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule,
    CommonModule,
    HeaderComponent,
    SidebarComponent,
  ]
})
export class ComponentsModule { }
