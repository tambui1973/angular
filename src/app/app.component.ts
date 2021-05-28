import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tutorial';


  @ViewChild('sidenav')
  sidenav!: MatSidenav;
  public isOpen = false;

  public closeLeftSide(){
    this.isOpen = false;
  }

  public openLeftSide(){
    this.isOpen = !this.isOpen;
    this.sidenav.toggle();
  }
}
