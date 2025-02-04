import {Component} from '@angular/core';
import {BorderComponent} from "../../common/border/border.component";
import {CenterViewComponent} from "../../common/center-view/center-view.component";
import {
  FormBuilder,
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-updating-form',
  standalone: true,
  imports: [
    BorderComponent,
    CenterViewComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './updating-form.component.html',
  styleUrl: './updating-form.component.css'
})
export class UpdatingFormComponent {
  form = this.fb.group({
    "firstName": new FormControl(""),
    "emailAddress": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  constructor(private fb: FormBuilder) {
  }

  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.form);
  }

  partialUpdate() {
    this.form.patchValue({firstName: 'Partial'});
  }

  fullUpdate() {
    this.form.setValue({
      firstName: 'Partial',
      emailAddress: 'partial@domain.com',
      password: 'monkey'
    });
  }

  reset() {
    this.form.reset();
  }
}
