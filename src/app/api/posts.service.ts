import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlApi = `${environment.url}api/posts`
  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.urlApi);
  }

  getOne(id: string) {

  }

  getBySlug(slug: string) {
    return this.http.get(`${this.urlApi}/${slug}`)
  }

  getByCategory(category: string) {
    return this.http.get(`${this.urlApi}/category/${category}`)
  }
}
