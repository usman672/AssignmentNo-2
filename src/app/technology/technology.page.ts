import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import{AllTechnologiesService} from '../all-technologies.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.page.html',
  styleUrls: ['./technology.page.scss'],
})
export class TechnologyPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController,
    private allTechnologyService: AllTechnologiesService,
  
  ) {}

  technologies = [];

  singleTechnology;

  ngOnInit() {
    this.technologies = this.allTechnologyService.returnList();

    this.route.paramMap.subscribe(paramMap => {
      const val = paramMap.get('movieyear');

      this.singleTechnology = this.technologies.find(obj => {
        return obj.description.includes(val);
      });
    });
  }

  async deleteTechnology() {
    console.log('Delete Technology', this.singleTechnology);

    const alert = await this.alertController.create({
      header: 'Alert',
      // subHeader: 'Subtitle',
      message: `Are you sure you want to remove ${this.singleTechnology.name}?`,
      // buttons: ['OK']
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
            this.allTechnologyService.deleteTechnology(this.singleTechnology.name);
            this.router.navigateByUrl('/technology-list');
          }
        }
      ]
    });

    alert.present();
  }

}
