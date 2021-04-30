import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Section } from '../models/section';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-update-section',
  templateUrl: './update-section.component.html',
  styleUrls: ['./update-section.component.css']
})
export class UpdateSectionComponent implements OnInit {
  id:number=0;
  section:Section=new Section()

  constructor(private router:Router,private sectionService:SectionService, private toastr:ToastrService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.sectionService.getBySectionId(this.id).subscribe(data=>{
      this.section=data
      console.log(this.section)
    }, error=>console.log(error))
  }
  updateSubmit(){
    this.sectionService.updateSection(this.id,this.section).subscribe(data=>{
         
      console.log(data)
      this.toastr.success(' les données ont été modifiées','message')
    }, error=>console.log(error))
    this.router.navigate(['/section'])
  }
}