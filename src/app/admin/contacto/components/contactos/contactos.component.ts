import { Component, OnInit } from '@angular/core';
import {ContactoService} from "../../../../api/contacto.service";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  solicitudes: any;

  constructor(
    private contactoService: ContactoService
  ) { }

  ngOnInit(): void {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.contactoService.getSolicitudes().then(res => this.solicitudes = res);
  }

}
