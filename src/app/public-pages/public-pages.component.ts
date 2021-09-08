import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { navbarListPublicPage } from 'src/assets/navbar/public-pages.navbar';
import { NavBar } from '../models/navbar.interface';
import { AppState } from '../store/app.reducer';
import { isLoading } from '../store/actions/ui.actions';

@Component({
  selector: 'app-public-pages',
  templateUrl: './public-pages.component.html',
  styleUrls: ['./public-pages.component.css']
})
export class PublicPagesComponent implements OnInit {

  navBarList: NavBar[] = [];

  constructor() {
    this.navBarList = navbarListPublicPage
  }

  ngOnInit(): void {

  }

}
