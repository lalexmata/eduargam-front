import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule
    ]
})
export class UsersModule { }
