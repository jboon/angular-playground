import {Component, OnInit} from '@angular/core';
import {
  ControlContainer,
  FormControl,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
// !!! -> viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
@Component({
  selector: 'app-child-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './child-form.component.html',
  styleUrl: './child-form.component.css',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class ChildFormComponent implements OnInit {
  childForm: any

  constructor(public parentForm: FormGroupDirective) {
    // ngOnInit must be use here, the FormGroupDirective will not be initialized yet in the constructor
  }

  ngOnInit(): void {
    this.childForm = this.parentForm.form;
    this.childForm.addControl(
        'address',
        new FormGroup({
          streetName: new FormControl(null, Validators.required),
          houseNumber: new FormControl(null, Validators.required)
        })
    );
  }
}
