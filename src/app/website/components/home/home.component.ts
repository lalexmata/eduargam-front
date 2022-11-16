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

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
