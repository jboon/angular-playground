import {Component} from '@angular/core';
import {BorderComponent} from "../../common/border/border.component";
import {CenterViewComponent} from "../../common/center-view/center-view.component";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-unidi',
  standalone: true,
  imports: [
    BorderComponent,
    CenterViewComponent,
    FormsModule,
    NgClass
  ],
  templateUrl: './unidi.component.html',
  styleUrl: './unidi.component.css'
})
export class UnidiComponent {
  user = {
    firstName: 'Jaco',
    emailAddress: 'jaco.boon@gmail.com',
    password: '1234'
  };

  onSubmitTemplateBased(user: { firstName: string, emailAddress: string, password: string }) {
    console.log(user);
  }
}
