import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-update-utilisateur',
  templateUrl: './update-utilisateur.component.html',
  styleUrls: ['./update-utilisateur.component.css']
})
export class UpdateUtilisateurComponent implements OnInit {
  utilisateurs:Utilisateur=new Utilisateur();  
  id: any;
  constructor(private utilisateurService:UtilisateurService, private router:Router,private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.utilisateurService.getByUtilisateurId(this.id).subscribe(data=>{
      this.utilisateurs=data
      console.log(this.utilisateurs)
    }, error=>console.log(error))
  }
  updateSubmit(){
    this.utilisateurService.updateUtilisateur(this.id,this.utilisateurs).subscribe(data=>{
         
      console.log(data)
      this.toastr.success(' les données ont été modifiées','message')
    }, error=>console.log(error))
    this.router.navigate(['/utilisateurs'])
  }
}
