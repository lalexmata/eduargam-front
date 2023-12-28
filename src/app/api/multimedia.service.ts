import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { MultimediaResponse } from '../interfaces/multimedia';
import ImageKit from "imagekit";


/*var imagekit = new ImageKit({
  publicKey : "public_dlHyHrAlcNyaiLHmSKsJVYlGMOQ=",
  privateKey : "private_BH6gqmy3bMyEUrwks97iKguaAn0=",
  urlEndpoint : "https://ik.imagekit.io/bykgc52fr/"
});*/

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

  subir(file: any, name: string) {
    /*return imagekit.upload({
      file: file,
      fileName: name
    });*/
  }
}
