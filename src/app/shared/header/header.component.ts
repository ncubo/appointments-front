import { Component, Input, OnInit } from '@angular/core';
import { NavBar } from '../../models/navbar.interface';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() navList: NavBar[] = [];

  constructor() { }

}
