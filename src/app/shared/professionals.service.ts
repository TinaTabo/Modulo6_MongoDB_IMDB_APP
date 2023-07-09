import { Injectable } from '@angular/core';
import { Professional } from '../models/professional';
import { Observable, last } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfessionalsService {

  private url = "https://modulo6-mongo-db-imdb-api-rest.vercel.app/profesionales"
  public pros: Professional[];

  constructor(private http: HttpClient){
    this.pros = [];
  }

  //-- Métodos para hacer peticiones a la API
  getOnePro(name:string, lastname:string):Observable<Object>{
    return this.http.get(this.url + '?firstName=' + name + '&lastName=' + lastname);
  }

  getAllPro():Observable<Object>{
    return this.http.get(this.url);
  }

  newPro(pro:Professional):Observable<Object>{
    return this.http.post(this.url, pro);
  }

  modifyPro(body: Object):Observable<Object>{
    return this.http.put(this.url,body);
  }

  deletePro(id:string):Observable<Object>{
    return this.http.request('delete', this.url, {body:{id:id}});
  }
}
