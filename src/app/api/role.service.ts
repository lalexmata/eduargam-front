import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {CreateUserDto, User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private urlApi = `${environment.url}api/roles`

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.urlApi);
  }
}
