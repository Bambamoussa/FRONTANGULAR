import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tableau } from '../models/tableau';
import { TableauService } from '../services/tableau.service';

@Component({
  selector: 'app-create-tableau',
  templateUrl: './create-tableau.component.html',
  styleUrls: ['./create-tableau.component.css']
})
export class CreateTableauComponent implements OnInit {

  tableau:Tableau=new Tableau()

  constructor(private router: Router, private tableauService:TableauService, private toastr:ToastrService) { }
  

  ngOnInit(): void {
  }
  saveSection(){
    this.tableauService.createTableau(this.tableau).subscribe(data=>{
      console.log(data);
      this.toastr.success('tableau enregistré','message')
    },
    error=>console.log(error)
    );
  }

  
  onSubmit(){
    this.saveSection()
    console.log(this.tableau)
    this.router.navigate(['/tableau']);
    
  }

}
