import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fiches } from '../models/fiches';
import { Section } from '../models/section';
import { Tableau } from '../models/tableau';
import { Utilisateur } from '../models/utilisateur';
import { FichesService } from '../services/fiches.service';

@Component({
  selector: 'app-update-fiche',
  templateUrl: './update-fiche.component.html',
  styleUrls: ['./update-fiche.component.css']
})
export class UpdateFicheComponent implements OnInit {

  id:number=0;
  fiche:Fiches=new Fiches()

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

  constructor(private router:Router,private ficheService:FichesService, private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.ficheService.getByFicheId(this.id).subscribe(data=>{
      this.fiche=data
      console.log(this.fiche)
    }, error=>console.log(error))
  }
  updateSubmit(){
    this.ficheService.updateFiche(this.id,this.fiche).subscribe(data=>{
         
      console.log(data)
      this.toastr.success(' les données ont été modifiées','message')
    }, error=>console.log(error))
    this.router.navigate(['/fiches'])
  }
}
