import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultimediaRoutingModule } from './multimedia-routing.module';
import { MultimediaComponent } from './components/multimedia/multimedia.component';
import { MultimediaFormComponent } from './components/multimedia-form/multimedia-form.component';


@NgModule({
  declarations: [
    MultimediaComponent,
    MultimediaFormComponent
  ],
  imports: [
    CommonModule,
    MultimediaRoutingModule
  ]
})
export class MultimediaModule { }
