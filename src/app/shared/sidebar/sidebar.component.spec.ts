import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';

import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the sidebar component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to professionals page', () => {
    const elements = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref));
    let exist = false;

    for (const elem of elements){
      if(elem.attributes['routerLink'] === 'professionals'){
        exist = true;
        break;
      }
    }

    expect(exist).toBeTruthy();
  });

  it('should have a link to public page', () => {
    const elements = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref));
    let exist = false;

    for (const elem of elements){
      if(elem.attributes['routerLink'] === 'public-pages'){
        exist = true;
        break;
      }
    }

    expect(exist).toBeTruthy();
  });


});
