import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MultimediaResponse} from "../interfaces/multimedia";


@Injectable({
  providedIn: 'root'
})
export class MultimediaService {
  private urlApi = `${environment.url}api/multimedia`
  constructor(
    private readonly httpClient: HttpClient
  ) { }

  getAll() {
    return this.httpClient.get<MultimediaResponse[]>(this.urlApi);
  }

  getOne(id: string) {
    return this.httpClient.get<MultimediaResponse>(`${this.urlApi}/${id}`);
  }
}
