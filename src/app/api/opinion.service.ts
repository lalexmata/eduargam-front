import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class OpinionService {

  constructor(
    private httpClient: HttpClient
  ) { }

  async getOpinions() {
    try {
      const response: any = await this.httpClient
        .get(`${environment.url}api/opinions`)
        .toPromise();

      return response;
    }catch (e) {
      console.log(`error al obtener opiniones`);
    }
  }
}
