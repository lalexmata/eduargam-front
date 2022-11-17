import { ClientsService } from './../../../api/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clients : any;

  constructor(
    private clientService: ClientsService,
  ) { }

   ngOnInit(): void {
    this.getClients();
  }

  async getClients() {
    this.clients = await this.clientService.getClients();
    console.log(this.clients);
  }

}
