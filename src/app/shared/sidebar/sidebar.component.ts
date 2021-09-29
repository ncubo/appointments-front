import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  status: boolean = false;

  constructor() { }

  
  clickEvent(){
      this.status = !this.status;       
  }

}
