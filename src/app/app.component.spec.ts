import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([])
      ],
      schemas: [ NO_ERRORS_SCHEMA ] //Ignore error with sidebar-component
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a router-outlet', () => {
    const debugElement = fixture.debugElement.query( By.directive(RouterOutlet) );
    expect(debugElement).not.toBeNull();
  });

  xit('should have a sidebar-component', () => {
    const debugElement = fixture.debugElement.query( By.directive(SidebarComponent) );
    expect(debugElement).not.toBeNull();
  });


});
