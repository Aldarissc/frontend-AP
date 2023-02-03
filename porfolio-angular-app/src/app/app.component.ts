import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'porfolio-angular-app';

  modalSwitch: boolean = false;

  openModal(){
    this.modalSwitch = true;
  }
}
