import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  @Input() elementos = [
    {
      image: "assets/img/bg1.jpg",
      descripcion: "Nature, United States"
    },
    {
      image: "assets/img/bg4.jpg",
      descripcion: "Yellowstone National Park, United States"
    },
    {
      image: "assets/img/bg3.jpg",
      descripcion: "Somewhere Beyond, United States"
    },
    {
      image: "assets/img/bg3.jpg",
      descripcion: "Somewhere Beyond, United States"
    },

  ];
  @Input() tipo: String = 'imagenes';
  @Input() identificador: String = 'carrusel';
  constructor() { }

  ngOnInit(): void {
  }

}
