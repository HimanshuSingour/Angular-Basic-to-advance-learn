import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title: string = 'learning-angular-app';
  dataBinding: string = 'This is a Data-Binding in App-Component';

  // parent to child
  sendToChildFooter: string = 'Coming From Parent App-Component to Footer';
  sendToChildNavbar: string = 'Coming From Parent App-Component to Navbar';

  // child to parents
  @ViewChild(FooterComponent) childComponet!: FooterComponent;
  message: string = '';
  fromChild: string = '';

  ngAfterViewInit(): void {
    this.message = this.childComponet.childToParentView;
  }

  recivedMessage($event: any) {
    this.fromChild = $event;
  }

  addNewMatral() {
    let newMatrial = {
      name: 'Musakn',
      location: 'Shadol',
    };
  }
}
