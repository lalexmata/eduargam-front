import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ConveniosService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getConvenios() {
    try {
      const response: any = await this.httpClient
        .get(`${environment.url}api/convenios`)
        .toPromise();

      return response;
    }catch (e) {
      console.log(`error al obtener convenios`);
    }
  }
}
