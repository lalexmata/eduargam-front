import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getClients() {
    try {
      const response: any = await this.httpClient
        .get(`${environment.url}api/clients/list`)
        .toPromise();

      return response;
    }catch (e) {
      console.log(`error al obtener clientes`);
    }
  }
}
