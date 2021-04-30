import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeAPIService } from './poke-apiservice';

@Injectable({
  providedIn: 'root'
})
export class PokeAPIServiceService {

  constructor(private Http:HttpClient) { }
  getPokemon():Observable<any>{
  return   this.Http.get('https://pokeapi.co/api/v2/pokemon/')

    
  }

  getPokemonInfo(id:string):Observable<PokeAPIService>{
    return   this.Http.get<PokeAPIService>('https://pokeapi.co/api/v2/pokemon/'+id+ '/'    )
  
      
    }


}
