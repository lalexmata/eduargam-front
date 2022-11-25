import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {RequestCategory, RequestUpdateCategory} from "../interfaces/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = `${environment.url}api/categories`;

  constructor(
    private httpClient: HttpClient,
  ) { }

  async getCategoriesList() {
    try {
      const response: any = await this.httpClient
        .get(this.url)
        .toPromise();

      return response;
    }catch (err) {
      console.log(`Error al obtener información`);
    }
  }

  async getCategorias() {
    try {
      const response: any = await this.httpClient
        .get(`${this.url}/types/posts`)
        .toPromise();

      return response;
    }catch (err) {
      console.log(`Error al obtener información`);
    }
  }

  async getCategoria(id: string) {
    try {
      const response: any = await this.httpClient
        .get(`${this.url}/${id}`)
        .toPromise();

      return response;
    }catch (err) {
      console.log(`Error al obtener información`);
    }
  }

  async create(data: RequestCategory){
    try {
      const response: any = await this.httpClient.post(`${this.url}`, data);
       return response;
    }catch (e) {
      console.log(`Error al guardar`);
    }
  }

  async update(id:number, data: RequestUpdateCategory){
    try {
      const response: any = await this.httpClient.put(`${this.url}`, data);
      return response;
    }catch (e) {
      console.log(`Error al actualizar`);
    }
  }

  async delete(idCategory: string){
    try {
      const response: any = await this.httpClient.delete(`${this.url}/${idCategory}`);
      return response;
    }catch (e) {
      console.log(`Error al eliminar`);
    }
  }
}
