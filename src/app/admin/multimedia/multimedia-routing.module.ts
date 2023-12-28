import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MultimediaComponent} from "./components/multimedia/multimedia.component";
import {MultimediaFormComponent} from "./components/multimedia-form/multimedia-form.component";

const routes: Routes = [
  {
    path: '',
    component: MultimediaComponent
  },
  {
    path: 'create',
    component: MultimediaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultimediaRoutingModule { }
