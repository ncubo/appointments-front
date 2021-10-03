import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { navbarListProfessionals } from 'src/assets/navbar/professionals.navbar';
import { HeaderComponent } from '../shared/header/header.component';

import { ProfessionalsComponent } from './professionals.component';

describe('ProfessionalsComponent', () => {
  let component: ProfessionalsComponent;
  let fixture: ComponentFixture<ProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsComponent, HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create professionals component', () => {
    expect(component).toBeTruthy();
  });

  it('should set navBarList from navbarListProfessionals', () => {
    component.ngOnInit();
    expect(component.navBarList).toEqual(navbarListProfessionals);
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
