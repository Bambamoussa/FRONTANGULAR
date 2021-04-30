import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  utilisateur:Utilisateur[]=[];   
  tableau:Tableau[]=[];

  libelle:string=''
  date_buttoir:Date =new Date()
  lieu:string=''
  note:string=""
  temps:number=0
  url:string=''
  id_utilisateur:number=0;
  id_section:number=0;
  id_tableau=0;


  tableau1:Tableau =new Tableau();
  section1:Section=new Section();
  utilisateur1:Utilisateur=new Utilisateur()
  section:Section[]=[];
  libelle_section:string|undefined
  constructor(private ficheService:FichesService,private toastr:ToastrService,private sectionService:SectionService,private tableauService:TableauService,private utilisateurService:UtilisateurService, private router:Router) { }
  
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
    this.fiches.libelle=this.libelle
    this.fiches.lieu=this.lieu
    this.fiches.note=this.note
    this.fiches.temps=this.temps
    this.utilisateurService.getByUtilisateurId(this.id_utilisateur).subscribe(data=>{
      this.fiches.utilisateur=data 
    })
    this.tableauService.getByTableauId(this.id_tableau).subscribe(data=>{
      this.fiches.tableau=data
   })
    this.ficheService.createFiche(this.fiches).subscribe(data=>{
      this.fiches=data
      this.toastr.success('fiche enregistré','message')
      
    })
    console.log(this.fiches)
  }
  onSubmit(): void {
   this.saveFiche()
   this.router.navigate(['/fiches']);
        
  }

}
 

