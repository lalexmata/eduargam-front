import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = `${environment.url}/api/auth`
  constructor(
    private http: HttpClient
  ) { }

  login(email: string, password: string) {
    return this.http.post(`${this.urlApi}/login`, {email, password});
  }
  profile(){
    return this.http.get(`${this.urlApi}/profile`);
  }
}
