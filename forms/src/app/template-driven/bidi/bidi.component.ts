import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BorderComponent} from "../../common/border/border.component";
import {CenterViewComponent} from "../../common/center-view/center-view.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-bidi',
  standalone: true,
  imports: [
    FormsModule,
    BorderComponent,
    CenterViewComponent,
    NgClass
  ],
  templateUrl: './bidi.component.html',
  styleUrl: './bidi.component.css'
})
export class BidiComponent {

  user = {} as {firstName: string, emailAddress: string, password: string};

  onSubmitTemplateBased() {
    console.log(this.user);
  }
}
