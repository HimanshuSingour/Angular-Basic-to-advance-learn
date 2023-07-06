import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

// i am using this service class to data-binding and directive components

export class LearningServicesService {

  objMaterial: Array<any> = [

    { name: 'himanshu', location: 'mandla' },
    { name: 'anshu', location: 'Mumbai' },
    
  ];

  constructor() { }
}
