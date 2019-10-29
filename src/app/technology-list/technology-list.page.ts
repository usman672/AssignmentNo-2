import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import{AllTechnologiesService} from '../all-technologies.service';



@Component({
  selector: 'app-technology-list',
  templateUrl: './technology-list.page.html',
  styleUrls: ['./technology-list.page.scss'],
})
export class TechnologyListPage implements OnInit {

  
  constructor(
    private router: Router,
    private allTechnologies:AllTechnologiesService
  ) {}

  technologies = [];

  ngOnInit() {
    console.log('nothing on init');
  
    // this.students = this.everythingstudentService.returnStudentsList();

    // this.students = this.studentsListService.getStudents;
    // this.students = this.studentsListService.getAllStudents();
  }

  changeUrl(user) {
    const description = user.description;
    const url = `technology-list/${description}`;

    this.router.navigateByUrl(url);

    // or

    // this.router.navigate([url]);
  }
  ionViewDidEnter() {
    console.log('view Enter');
    this.technologies = this.allTechnologies.returnList();
  }


}
