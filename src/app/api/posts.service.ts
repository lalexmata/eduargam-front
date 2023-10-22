import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Post} from "../interfaces/post";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private urlApi = `${environment.url}api/posts`
  constructor(
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get<Post[]>(this.urlApi);
  }

  getOne(id: string) {
    return this.http.get<Post>(`${this.urlApi}/${id}`);
  }

  getBySlug(slug: string) {
    return this.http.get(`${this.urlApi}/${slug}`)
  }

  getByCategory(category: string) {
    return this.http.get(`${this.urlApi}/category/${category}`)
  }
}
