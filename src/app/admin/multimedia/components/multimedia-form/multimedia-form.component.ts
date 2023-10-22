import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multimedia-form',
  templateUrl: './multimedia-form.component.html',
  styleUrls: ['./multimedia-form.component.css']
})
export class MultimediaFormComponent implements OnInit {
  title: string = 'Nuevas Imágenes';
  constructor() { }

  ngOnInit(): void {
  }

}
