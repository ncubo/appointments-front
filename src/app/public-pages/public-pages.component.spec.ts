import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { navbarListPublicPage } from 'src/assets/navbar/public-pages.navbar';
import { HeaderComponent } from '../shared/header/header.component';

import { PublicPagesComponent } from './public-pages.component';

describe('PublicPagesComponent', () => {
  let component: PublicPagesComponent;
  let fixture: ComponentFixture<PublicPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPagesComponent, HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set navBarList from navbarListPublicPage', () => {
    expect(component.navBarList).toEqual(navbarListPublicPage);
  });

  it('should have a router-outlet', () => {
    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet) );
    expect(debugElement).not.toBeNull();
  });

  it('should have header-component', () => {
    const debugElement = fixture.debugElement.query( By.directive(HeaderComponent) );
    expect(debugElement).not.toBeNull();
  });

});
