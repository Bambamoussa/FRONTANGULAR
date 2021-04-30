import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Fiches } from '../models/fiches';
import { FichesService } from '../services/fiches.service';

@Component({
  selector: 'app-fiches',
  templateUrl: './fiches.component.html',
  styleUrls: ['./fiches.component.css']
})
export class FichesComponent implements OnInit {
  fiches:Fiches[]=[];  
  fichesById:Fiches=new Fiches()
  p: number = 1;                                                                              

  constructor(private fichesService:FichesService, private toastr :ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.getFiches()
  }
 
  private getFiches(){
    this.fichesService.getFicheList().subscribe(data=>{
      this.fiches=data
      console.log(this.fiches)
    })
  }

  Ajouter():void{
    this.router.navigate(['/createFiches']);                                                                                                                                                                                
  }
  DeleteFiche(id:any){
    this.fichesService.deleteFiche(id).subscribe(data=>{
       
      console.log(data)
      this.getFiches()
      this.toastr.success(' la fiche  a été supprimée','message')
    })
  }

  detailsFiches(id:any){
    this.fichesService.getByFicheId(id).subscribe(data=>{
       
       this.fichesById=data
    })
  }
}
