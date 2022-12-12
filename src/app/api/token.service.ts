import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
   token_name = 'access_token'
  constructor() { }

  saveToken(token: string) {
    localStorage.setItem(this.token_name, token);
  }
  getToken() {
    return localStorage.getItem(this.token_name);
  }

  removeToken() {
    localStorage.removeItem(this.token_name);
  }
}
