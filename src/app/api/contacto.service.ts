import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CreateContacto} from "../interfaces/contacto";

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

  async get() {
    return this.http.get(this.url).toPromise();
  }
}
