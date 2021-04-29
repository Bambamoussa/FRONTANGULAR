import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Section } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionService {

  private urlSection="api/section/all";
  private urlCreateSection="api/section";
  private urlDeleteSection="api/section/delete"
   
  constructor(private httpClient :HttpClient) { }

  getSectionList(): Observable<Section[]>{
    return this.httpClient.get<Section[]>(`${this.urlSection}`);
  }
  createSection(section:Section):Observable<object>{
  
    return this.httpClient.post(`${this.urlCreateSection}`,section);
  }

  deleteSection(id:any):Observable<object>{
    return this.httpClient.delete(`${this.urlDeleteSection}/${id}`)
  }
}
