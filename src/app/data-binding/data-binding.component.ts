import { Component } from '@angular/core';
import { LearningServicesService } from '../services/learning-services.service';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent {
  dataBinding: string = 'Interpolation Learning';
  propertyBindingimageUrl: string ='https://m.media-amazon.com/images/I/61uYuKQhJRL._AC_UF894,1000_QL80_.jpg';
  StyleOrClass: boolean = true;

  twoWayDataBinding:string = "";

  servicesVaribale:Array<any> [];


  eventBinding() {
    console.log('This is a Event Binding...');
  }

  keyUpBinding($event: any) {
    console.log('Key is uppp');
    console.log($event.target.value);
  }

  keyUpBindings(username: any) {
    console.log(username);
  }

  twoWays(){
    console.log(this.twoWayDataBinding);
    
  }

  constructor(private LearningService: LearningServicesService){
     this.servicesVaribale = this.LearningService.objMaterial

  }
}
