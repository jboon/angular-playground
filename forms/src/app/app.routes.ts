import { Routes } from '@angular/router';
import {StartComponent} from "./start/start.component";
import {BidiComponent} from "./template-driven/bidi/bidi.component";
import {UnidiComponent} from "./template-driven/unidi/unidi.component";
import {NobiComponent} from "./template-driven/nobi/nobi.component";
import {SimpleFormComponent} from "./reactive/simple-form/simple-form.component";
import {ObservedFormComponent} from "./reactive/observed-form/observed-form.component";
import {UpdatingFormComponent} from "./reactive/updating-form/updating-form.component";
import {NestedFormsComponent} from "./reactive/nested-forms/nested-forms.component";

export const routes: Routes = [
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {
    path: 'start',
    component: StartComponent
  },
  {
    path: 'template-driven_bi-directional',
    component: BidiComponent
  },
  {
    path: 'template-driven_uni-directional',
    component: UnidiComponent
  },
  {
    path: 'template-driven_no-binding',
    component: NobiComponent
  },
  {
    path: 'reactive_simple',
    component: SimpleFormComponent
  },
  {
    path: 'reactive_observed',
    component: ObservedFormComponent
  },
  {
    path: 'reactive_updating',
    component: UpdatingFormComponent
  },
  {
    path: 'reactive_nested',
    component: NestedFormsComponent
  }
];
