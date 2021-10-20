import { AfterViewChecked, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NavBar } from '../models/navbar.interface';
import { navbarListProfessionals } from '../../assets/navbar/professionals.navbar';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-professionals',
  templateUrl: './professionals.component.html',
  styleUrls: ['./professionals.component.css']
})
export class ProfessionalsComponent implements OnInit, AfterViewInit {

  @ViewChild(HeaderComponent) header!: HeaderComponent;

  navBarList: NavBar[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navBarList = navbarListProfessionals;
  }

  ngAfterViewInit() {
    console.log('header component from ProfessionalsComponent', this.header);
    // this.header.navList[0].name = 'HHHH';
  }

  // ngAfterViewChecked() {
  //   console.log('header component from ProfessionalsComponent', this.header.navList[0].name = 'HHHH');
  // }

}
