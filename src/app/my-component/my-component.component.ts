import { Component, OnInit } from '@angular/core';
import { PokeAPIService } from '../poke-apiservice';
import { PokeAPIServiceService } from '../poke-apiservice.service';
import { PokeShareInfoService } from '../poke-share-info.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers:[PokeAPIServiceService,PokeShareInfoService]
})
export class MyComponentComponent implements OnInit {
 id: string=" ";
 selectedPokeId:string="";
 searchPokeName = "";
 pokeDetails!: PokeAPIService;
 pokes:Pokemon[]=[];
  constructor(private pokeAPIService:PokeAPIServiceService, private pokeShare: PokeShareInfoService) { 
/*
    this.pokes.push(new Pokemon("1","moussa"));
    this.pokes.push(new Pokemon("2","bamba"));
    this.pokes.push(new Pokemon("3","sali"));
    this.pokes.push(new Pokemon("4","iB"));
    this.pokes.push(new Pokemon("5","Affou"))*/
  }
    
  ngOnInit(): void {
    this.pokeAPIService.getPokemon().subscribe(data=>{
       data.results.forEach((e: any,index: string) => {
         this.pokes.push(new Pokemon(index,e.name));
      
         
       });
      
    });
  }

  go(){
   this.pokeShare.setValue(this.selectedPokeId)
   if(this.selectedPokeId!=''){
     this.pokeAPIService.getPokemonInfo(this.selectedPokeId).subscribe(data=>
      this.pokeDetails=data)
   }
  }

}
