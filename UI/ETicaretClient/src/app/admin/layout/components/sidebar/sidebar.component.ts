import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule, MatListModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
