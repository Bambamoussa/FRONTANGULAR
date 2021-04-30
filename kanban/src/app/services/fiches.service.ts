import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fiches } from '../models/fiches';

@Injectable({
  providedIn: 'root'
})
export class FichesService {

  private urlFile="/api/fiche/all"
  private urlFilePost="/api/fiche"
  private urlDeleteFiche="/api/fiche/delete"
  constructor( private httpClient :HttpClient) { }
  
  getFicheList(): Observable<Fiches[]>{
    return this.httpClient.get<Fiches[]>(`${this.urlFile}`);
  }

  createFiche(fiches:Fiches):Observable<any>{
    return this.httpClient.post(`${this.urlFilePost}`,fiches)
  }
  deleteFiche(id:any):Observable<object>{
    return this.httpClient.delete(`${this.urlDeleteFiche}/${id}`)
  }
  
  getByFicheId(id:any):Observable<Fiches>{
    return this.httpClient.get<Fiches>(`${this.urlFilePost}/${id}`)
 }
 updateFiche(id:any,fiche:Fiches):Observable<object>{
  return this.httpClient.post(`${this.urlFilePost}/${id}`,fiche)
}
}
