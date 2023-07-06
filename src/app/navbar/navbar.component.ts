import { Component, Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() fromParent:string = "";

  childToParentOutput:string = "Coming from child to parent(App-Componet) using 'Output & Event Emmitter' "

  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(){
    
    this.messageEvent.emit(this.childToParentOutput)

  }


}
