import { Component, OnInit } from '@angular/core';
import { NavBar } from '../models/navbar.interface';
import { navbarListProfessionals } from '../../assets/navbar/professionals.navbar';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit {

  navBarList: NavBar[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navBarList = navbarListProfessionals;
  }

}
