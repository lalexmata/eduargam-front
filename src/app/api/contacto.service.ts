import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CreateContacto, UpdateContacto} from "../interfaces/contacto";

@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  private url = `${environment.url}api/contacto`;
  constructor(
    private http: HttpClient,
  ) { }

  async create(data: CreateContacto) {
    return this.http.post(this.url, data).toPromise();
  }

  async update(data: UpdateContacto) {
    return this.http.put(this.url, data).toPromise();
  }

  async getSolicitudes() {
    return this.http.get(this.url).toPromise();
  }

  async getSolicitud(id: string) {
    return this.http.get(`${this.url}/${id}`).toPromise();
  }
}
