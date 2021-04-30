import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-utilisateurs',
  templateUrl: './utilisateurs.component.html',
  styleUrls: ['./utilisateurs.component.css']
})
export class UtilisateursComponent implements OnInit {

  utilisateurs:Utilisateur[] =[];  
  closeResult = '';   
  p: number = 1;
  utilisateursById: Utilisateur=new Utilisateur() ;                                                                            

  constructor(private utilisateurService:UtilisateurService,
    //private modalService: NgbModal,
    private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getUtilisateurs()
  }
 
  private getUtilisateurs(){
    this.utilisateurService.getUtilisateurList().subscribe(data=>{
      this.utilisateurs=data
      
      console.log(this.utilisateurs)
    })
  }
  AjouterUtilisateur():void{
    this.router.navigate(['/createutilisateur']);                                                                                                                                                                                
  }

  updateUtilisateur(id: any){
    this.router.navigate(['update_utilisateur',id])
  }
  DeleteUtilisateur(id:any){
    this.utilisateurService.deleteUtilisateur(id).subscribe(data=>{
       
      console.log(data)
      this.getUtilisateurs()
      this.toastr.success(' l utilisateur a été supprimé','message')
    })
  }
  detailsUtilisateur(id:any){
    this.utilisateurService.getByUtilisateurId(id).subscribe(data=>{
       
       this.utilisateursById=data
    })
  }
  
   

}
