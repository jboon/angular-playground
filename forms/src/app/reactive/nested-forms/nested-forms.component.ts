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
import {ChildFormComponent} from "./child-form/child-form.component";
import {filter, map} from "rxjs";

@Component({
  selector: 'app-nested-forms',
  standalone: true,
  imports: [
    BorderComponent,
    CenterViewComponent,
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    ChildFormComponent
  ],
  templateUrl: './nested-forms.component.html',
  styleUrl: './nested-forms.component.css'
})
export class NestedFormsComponent {

  form = this.fb.group({
    "firstName": new FormControl("Harry"),
    "emailAddress": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required),
  });

  constructor(private fb: FormBuilder) {
    this.form.valueChanges
    .pipe(
      map((value) => {
        value.firstName = value.firstName!.toUpperCase();
        return value;
      }),
      filter(() => this.form.valid)
    )
    .subscribe((value) => {
      console.log("Reactive Form valid value: vm = ",
        JSON.stringify(value));
    });
  }

  onSubmitModelBased() {
    console.log("reactive form submitted");
    console.log(this.form);
  }

  validateForm() {
    console.log('form is valid = ' + this.form.valid);
  }
}
