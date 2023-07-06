import { Component } from '@angular/core';
import { LearningServicesService } from '../services/learning-services.service';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {

  servicesVaribale: Array<any> = [];

  user: Array<string> = ['himamshu' , 'anshu' , 'ankush' , 'himmu' , 'post']

  userObg: Array<object> = [

    {name: 'himanshu' , id: 1},
    {name: 'ankush' , id: 2},
    {name: 'anshu' , id: 3},
    {name: 'himmu' , id: 4},
    {name: 'post' , id: 1},

  ]

  constructor(private LearningService: LearningServicesService) {
    this.servicesVaribale = this.LearningService.objMaterial;

  }

}
