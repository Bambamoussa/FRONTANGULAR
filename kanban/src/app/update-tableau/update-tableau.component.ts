import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tableau } from '../models/tableau';
import { TableauService } from '../services/tableau.service';

@Component({
  selector: 'app-update-tableau',
  templateUrl: './update-tableau.component.html',
  styleUrls: ['./update-tableau.component.css']
})
export class UpdateTableauComponent implements OnInit {
  id:number=0;
  tableau:Tableau=new Tableau()

  constructor(private router:Router,private tableauService:TableauService, private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.tableauService.getByTableauId(this.id).subscribe(data=>{
      this.tableau=data
      console.log(this.tableau)
    }, error=>console.log(error))
  }
  updateSubmit(){
    this.tableauService.updateTableau(this.id,this.tableau).subscribe(data=>{
         
      console.log(data)
      this.toastr.success(' les données ont été modifiées','message')
    }, error=>console.log(error))
    this.router.navigate(['/tableau'])
  }

}
