import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Credentials, Login} from "../interfaces/auth";
import {BehaviorSubject, switchMap, tap} from "rxjs";
import {TokenService} from "./token.service";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlApi = `${environment.url}api/auth`;
  private user = new BehaviorSubject<User | null>(null);
  // aaca se encentra el estado del usuario
  user$ = this.user.asObservable();

  constructor(
    private http: HttpClient,
    private tokenService: TokenService,
  ) { }

  login(datos: Credentials) {
    return this.http.post<Login>(`${this.urlApi}/login`, datos)
      .pipe(
        tap( response => {
          this.tokenService.saveToken(response.token)
          switchMap( () => this.getProfile())
        })
      );
  }
  getProfile(){
    //const headers = new HttpHeaders();
    //headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<User>(`${this.urlApi}/profile`)
      .pipe(
        tap( user => this.user.next( user))
      );
  }

  logout() {
    this.tokenService.removeToken();
  }
}
