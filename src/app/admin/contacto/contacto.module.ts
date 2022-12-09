import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactosComponent } from './components/contactos/contactos.component';
import { ContactosFormComponent } from './components/contactos-form/contactos-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContactosComponent,
    ContactosFormComponent
  ],
    imports: [
        CommonModule,
        ContactoRoutingModule,
        ReactiveFormsModule
    ]
})
export class ContactoModule { }
