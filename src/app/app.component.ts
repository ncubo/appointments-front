import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  status: boolean = false;

  constructor() { }
  
  toggleSideBar(){
      this.status = !this.status;       
  }
}
