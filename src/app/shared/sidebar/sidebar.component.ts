import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-component',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  status: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log('SidebarComponent');
  }

  
  clickEvent(){
      this.status = !this.status;       
  }

}
