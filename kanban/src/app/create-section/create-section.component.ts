import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Section } from '../models/section';
import { SectionService } from '../services/section.service';

@Component({
  selector: 'app-create-section',
  templateUrl: './create-section.component.html',
  styleUrls: ['./create-section.component.css']
})
export class CreateSectionComponent implements OnInit {

 Sections:Section=new Section()

  constructor(private router: Router, private sectionService:SectionService, private toastr:ToastrService) { }
  

  ngOnInit(): void {
  }
  saveSection(){
    this.sectionService.createSection(this.Sections).subscribe(data=>{
      console.log(data);
      this.toastr.success('section enregistré','message')
    },
    error=>console.log(error)
    );
  }

  
  onSubmit(){
    this.saveSection()
    this.router.navigate(['/section']);
    
  }

}
