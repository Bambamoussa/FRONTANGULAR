import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tableau } from '../models/tableau';
import { TableauService } from '../services/tableau.service';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  tableau:any[] =[] ;                                                                                
  p: number = 1;
  constructor(private tableauService:TableauService,private toastr:ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.getTableau()
  }
 
  private getTableau(){
    this.tableauService.getTableauList().subscribe(data=>{
      this.tableau=data
      console.log(this.tableau)
    })
  }

  AjouterTableau():void{
    this.router.navigate(['/createTableau']);                                                                                                                                                                                
  }

  DeleteTableau(id:any){
    this.tableauService.deleteTableau(id).subscribe(data=>{
       
      console.log(data)
      this.getTableau()
      this.toastr.success(' le tableau  a été supprimé','message')
    })
  }
  updateTableau(id: any){
    this.router.navigate(['update_tableau',id])
  }

}
