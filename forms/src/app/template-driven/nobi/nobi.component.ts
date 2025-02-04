import { Component } from '@angular/core';
import {BorderComponent} from "../../common/border/border.component";
import {CenterViewComponent} from "../../common/center-view/center-view.component";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-nobi',
  standalone: true,
  imports: [
    BorderComponent,
    CenterViewComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './nobi.component.html',
  styleUrl: './nobi.component.css'
})
export class NobiComponent {

  onSubmitTemplateBased(user: { firstName: string, emailAddress: string, password: string }) {
    console.log(user);
  }
}
