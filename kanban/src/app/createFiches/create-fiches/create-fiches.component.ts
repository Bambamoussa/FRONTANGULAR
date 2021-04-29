import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fiches } from 'src/app/models/fiches';
import { Section } from 'src/app/models/section';
import { Tableau } from 'src/app/models/tableau';
import { Utilisateur } from 'src/app/models/utilisateur';
import { FichesService } from 'src/app/services/fiches.service';
import { SectionService } from 'src/app/services/section.service';
import { TableauService } from 'src/app/services/tableau.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-create-fiches',
  templateUrl: './create-fiches.component.html',
  styleUrls: ['./create-fiches.component.css']
})
export class CreateFichesComponent implements OnInit {
  fiches: Fiches=new Fiches()
  utilisateur:Utilisateur[] | undefined;   
  tableau:Tableau[]|undefined;
  tableau1:Tableau =new Tableau();
  section1:Section=new Section();
  utilisateur1:Utilisateur=new Utilisateur()
  section:Section[]|undefined;
  libelle_section:string|undefined
  constructor(private ficheService:FichesService,private sectionService:SectionService,private tableauService:TableauService,private utilisateurService:UtilisateurService, private router:Router) { }
  
  ngOnInit(): void {
    this.getUtilisateur()
    this.getTableau()
    this.getSection()
     

  }
   
  private getUtilisateur(){
    this.utilisateurService.getUtilisateurList().subscribe(data=>{
      this.utilisateur=data
      console.log(this.utilisateur)
    })
  }

  private getTableau(){
    this.tableauService.getTableauList().subscribe(data=>{
      this.tableau=data
      console.log(this.tableau)
    })
  }

  private getSection(){
    this.sectionService.getSectionList().subscribe(data=>{
      this.section=data
      console.log(this.section)
    })
  }
  onSelect(event:any){
    console.log(event)
    
  }
  saveFiche(){
    
    this.ficheService.createFiche(this.fiches).subscribe(data=>{
      
      console.log(this.fiches)
    })
  }
  onSubmit(): void {
       // this.saveFiche()
       console.log(this.utilisateur)
        
  }

}
 

