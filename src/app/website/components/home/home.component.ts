import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  calugasClientes = [
    {
      nombre_cliente: "Starbucks Café",
      logo: "https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/1553700547770-ZDJL9HYLFIQW463I3FXE/starbucks-coffee.jpg?format=2500w"
    },
    {
      nombre_cliente: "Starbucks Café",
      logo: "https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/1553700547770-ZDJL9HYLFIQW463I3FXE/starbucks-coffee.jpg?format=2500w"
    },
    {
      nombre_cliente: "Starbucks Café",
      logo: "https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/1553700547770-ZDJL9HYLFIQW463I3FXE/starbucks-coffee.jpg?format=2500w"
    },
    {
      nombre_cliente: "Starbucks Café",
      logo: "https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/1553700547770-ZDJL9HYLFIQW463I3FXE/starbucks-coffee.jpg?format=2500w"
    },
    {
      nombre_cliente: "Starbucks Café",
      logo: "https://images.squarespace-cdn.com/content/v1/58d15ded6a49638c26e0888c/1553700547770-ZDJL9HYLFIQW463I3FXE/starbucks-coffee.jpg?format=2500w"
    },

  ];

  trabajos = [
    { imagen: 'https://images2.imgbox.com/8c/24/J618LS2j_o.jpeg'},
    { imagen: 'https://images2.imgbox.com/5d/36/tcM66dAC_o.jpeg'},
    { imagen: 'https://images2.imgbox.com/60/91/8B1zWr2j_o.jpeg'},
    { imagen: 'https://images2.imgbox.com/be/3b/6X0Zy9OU_o.jpeg'},
    { imagen: 'https://images2.imgbox.com/37/64/zPc4hbA0_o.jpeg'},
    { imagen: 'https://images2.imgbox.com/d1/0b/dAgwne5D_o.jpeg'},
  ];

  swiperConfig: any = {
    navigation: true,
    spaceBetween: 30,
    autoplay: true,
    breakpoints: {
      '992': {
        slidesPerView: 2,
        spaceBetween: 30
      },
      '480': {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      '640': {
        slidesPerView: 1,
        spaceBetween: 50,
      },
    },
  }
  constructor() { }

  ngOnInit(): void {
  }

}
