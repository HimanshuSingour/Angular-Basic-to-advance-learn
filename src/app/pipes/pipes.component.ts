import { Component } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent {
  pipesOne: string = 'Learnning Pipes..';
  numbersOne: number = 6266764;
  numberDecimal: number = 3.451254;
  numberCurrency: number = 99.99;
  todayData: Data = new Date();

  jsonPipes: Array<object> = [
    { name: 'himanshu', id: 1 },
    { name: 'anshu', id: 2 },
    { name: 'himmu', id: 3 },
  ];

  percentagePip: number = 4.545

  customsPipes: Array<object> = [
     {City: "Jabalpur" , id: 1},
     {City: "Mandla" , id: 2},
     {City: "Mumbai" , id: 3}
  ]
}
