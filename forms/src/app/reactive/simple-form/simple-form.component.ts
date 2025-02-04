import { Component } from '@angular/core';
import {BorderComponent} from "../../common/border/border.component";
import {CenterViewComponent} from "../../common/center-view/center-view.component";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-simple-form',
  standalone: true,
  imports: [
    BorderComponent,
    CenterViewComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './simple-form.component.html',
  styleUrl: './simple-form.component.css'
})
export class SimpleFormComponent {

  form = new FormGroup({
    "firstName": new FormControl(""),
    "emailAddress": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.form);
  }
}
