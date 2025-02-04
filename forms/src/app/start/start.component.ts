import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {CenterViewComponent} from "../common/center-view/center-view.component";
import {BorderComponent} from "../common/border/border.component";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    RouterLink,
    CenterViewComponent,
    BorderComponent
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

}
