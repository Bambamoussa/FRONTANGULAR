import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Section } from '../models/section';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  sections:Section[]=[];  
  p:number=1                                                                              

  constructor(private sectionService:SectionService, private toastr :ToastrService,private router: Router) { }

  ngOnInit(): void {
    this.getSections()
  }
 
  AjouterSection():void{
    this.router.navigate(['/createsection']);                                                                                                                                                                                
  }

  private getSections(){
    this.sectionService.getSectionList().subscribe(data=>{
      this.sections=data
      console.log(this.sections)
    })
  }
  DeleteSection(id:any){
    this.sectionService.deleteSection(id).subscribe(data=>{
       
      console.log(data)
      this.getSections()
      this.toastr.success(' la section  a été supprimée','message')
    })
  }
   
}
