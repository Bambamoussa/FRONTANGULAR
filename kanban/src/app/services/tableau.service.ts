import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tableau } from '../models/tableau';

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  private urlTableau="api/tableau/all";
  private urlCreateTableau="api/tableau";
  private UrldeleteTableau="api/tableau/delete"
   
  constructor(private httpClient :HttpClient) { }

  getTableauList(): Observable<Tableau[]>{
    return this.httpClient.get<Tableau[]>(`${this.urlTableau}`);
  }

  createTableau(tableau:Tableau):Observable<object>{
  
    return this.httpClient.post(`${this.urlCreateTableau}`,tableau);
  }

  deleteTableau(id:any):Observable<object>{
    return this.httpClient.delete(`${this.UrldeleteTableau}/${id}`)
  }
}
