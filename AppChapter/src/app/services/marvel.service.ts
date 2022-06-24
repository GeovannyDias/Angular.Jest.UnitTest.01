import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { MarvelI } from '../models/marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  pathServer: string = environment.serverDomain;
  idAuthor: string = environment.idAuthor;

  constructor(private http: HttpClient) { }

  getCharacters() {
    const endPoint: string = '/marvel-characters';
    const pathUrl = `${this.pathServer}${endPoint}?idAuthor=${this.idAuthor}`;
    return this.http.get<MarvelI[]>(pathUrl);
  }

  postCharacter(data: MarvelI) {
    // https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=2
    const endPoint: string = '/marvel-characters';
    const pathUrl = `${this.pathServer}${endPoint}?idAuthor=${this.idAuthor}`;
    return this.http.post<MarvelI>(pathUrl, data);
  }

  putCharacter(data: MarvelI) {
    const endPoint: string = '/marvel-characters';
    const pathUrl = `${this.pathServer}${endPoint}/${data._id}?idAuthor=${this.idAuthor}`;
    return this.http.put<MarvelI>(pathUrl, data);
  }

  deleteCharacter(id?: string) {
    const endPoint: string = '/marvel-characters';
    const pathUrl = `${this.pathServer}${endPoint}/${id}?idAuthor=${this.idAuthor}`;
    return this.http.delete(pathUrl);
  }
}
