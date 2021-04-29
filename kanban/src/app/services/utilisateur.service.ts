import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Type } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  private urlUtilisateur="/api/utilisateur/all"
  private urlCreateUtilisateur="/api/utilisateur"
  private urlUpdateUtilisateur="/api/utilisateur"
  private UpdateUtilisateur="/api/utilisateur/utilisateur"
  private UrldeleteUtilisateur="/api/utilisateur/delete/"
   
  private option= {
    headers:new HttpHeaders({
    'Content-type':'application/json'})
};
  
  constructor( private httpClient :HttpClient) { }
  
  getUtilisateurList(): Observable<Utilisateur[]>{
    return this.httpClient.get<Utilisateur[]>(`${this.urlUtilisateur}`);
  }
  createUtilisateur(utilisateur:Utilisateur):Observable<object>{
  
    return this.httpClient.post(`${this.urlCreateUtilisateur}`,utilisateur);
  }
  getByUtilisateurId(id:any):Observable<Utilisateur>{
     return this.httpClient.get<Utilisateur>(`${this.urlUpdateUtilisateur}/${id}`)
  }
  updateUtilisateur(id:any,utilisateur:Utilisateur):Observable<object>{
    return this.httpClient.put(`${this.UpdateUtilisateur}/${id}`,utilisateur)
  }
   deleteUtilisateur(id:any):Observable<object>{
    return this.httpClient.delete(`${this.UrldeleteUtilisateur}/${id}`)
  }
}
