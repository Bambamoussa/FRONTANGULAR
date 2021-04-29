import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-create-utilisateur',
  templateUrl: './create-utilisateur.component.html',
  styleUrls: ['./create-utilisateur.component.css']
})
export class CreateUtilisateurComponent implements OnInit {
  utilisateurs:Utilisateur=new Utilisateur()

  constructor(private router: Router, private utilisateurService:UtilisateurService, private toastr:ToastrService) { }
  

  ngOnInit(): void {
  }
  saveUtilisateur(){
    this.utilisateurService.createUtilisateur(this.utilisateurs).subscribe(data=>{
      console.log(data);
      this.toastr.success('utilisateur enregistré','message')
    },
    error=>console.log(error)
    );
  }
  onSubmit(){
    this.saveUtilisateur();
    this.router.navigate(['/utilisateurs']);
   // console.log(this.utilisateurs)
  }
   

}
