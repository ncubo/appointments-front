import { Component, Input, OnInit } from '@angular/core';
import { NavBar } from '../../models/navbar.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() navList: NavBar[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log('this.navlist: ',this.navList);
  }

}
