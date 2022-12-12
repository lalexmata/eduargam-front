import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CreateUserDto, UpdateUserDto, User} from "../interfaces/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi = `${environment.url}api/users`

  constructor(
    private http: HttpClient
  ) { }

  create(data: CreateUserDto) {
    return this.http.post<User>(this.urlApi, data);
  }

  getAll() {
    return this.http.get<User[]>(this.urlApi);
  }

  getOne(id: string) {
    return this.http.get<User>(`${this.urlApi}/${id}`);
  }

  update(id: string, data: UpdateUserDto) {
    return this.http.put<User>(`${this.urlApi}/${id}`, data);
  }

  delete(id: string) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
