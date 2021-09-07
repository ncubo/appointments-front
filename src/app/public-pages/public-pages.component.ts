import { Component, OnInit } from '@angular/core';
import { navbarListPublicPage } from 'src/assets/navbar/public-pages.navbar';
import { NavBar } from '../models/navbar.interface';

@Component({
  selector: 'app-public-pages',
  templateUrl: './public-pages.component.html',
  styleUrls: ['./public-pages.component.css']
})
export class PublicPagesComponent implements OnInit {

  navBarList: NavBar[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navBarList = navbarListPublicPage
  }

}
