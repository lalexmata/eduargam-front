import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactosComponent} from "./components/contactos/contactos.component";
import {ContactosFormComponent} from "./components/contactos-form/contactos-form.component";

const routes: Routes = [
  {
    path: '',
    component: ContactosComponent
  },
  {
    path: 'gestionar/:id',
    component: ContactosFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactoRoutingModule { }
