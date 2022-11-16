import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  async getCategorias() {
    try {
      const response: any = await this.httpClient
        .get(`${environment.url}api/categories/types/posts`)
        .toPromise();

      return response;
    }catch (err) {
      console.log(`Error al obtener información`);
    }
  }
}
