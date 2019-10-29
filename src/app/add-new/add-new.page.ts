import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

import{AllTechnologiesService} from '../all-technologies.service';



@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.page.html',
  styleUrls: ['./add-new.page.scss'],
})
export class AddNewPage implements OnInit {

  addForm: FormGroup;
  singleTechnology;
  
  constructor(
     private router:Router,
     private allTechnologyService: AllTechnologiesService,
     private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formInitializer();
  }

  formInitializer() {
    this.addForm = this.formBuilder.group({
      description: [null, [Validators.required]],
      name: [null, [Validators.required]],
      img: [null, [Validators.required]]
      
    });
  }

   async addNewTechnology(){
     this.singleTechnology = this.addForm.value;
    
    this.allTechnologyService.addNewTechnology(this.singleTechnology.description, this.singleTechnology.name,this.singleTechnology.img);
    this.router.navigateByUrl('/technology-list');
  }

}
