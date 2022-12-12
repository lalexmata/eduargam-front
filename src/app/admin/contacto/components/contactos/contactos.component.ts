import { Component, OnInit } from '@angular/core';
import {ContactoService} from "../../../../api/contacto.service";
import {Moment} from "moment";
import * as moment from "moment";

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {
  private readonly MOMENT_DATE_FORMAT = 'DD/MM/YYYY HH:mm';
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

  formatFecha(date: string){
    return  moment(date)
      .format(this.MOMENT_DATE_FORMAT)
      .toString();
  }

}
