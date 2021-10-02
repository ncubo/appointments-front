import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    component.navList = [
      {
        name: 'Professionals', 
        link: 'list'
      },
      {
        name: 'New Professional', 
        link: 'new'
      },
      {
        name: 'Search', 
        link: 'search'
      }
    ];

    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should create nav bar', () => {
    const firstTabName = component.navList[0].name;
    const elem: HTMLElement = fixture.debugElement.nativeElement.querySelector('.nav-link');
    expect(elem.innerHTML).toContain(firstTabName);
  });

  it('should have a link to component', () => {
    const firstTabLink = `/${component.navList[0].link}`;
    const elements = fixture.debugElement.queryAll( By.directive(RouterLinkWithHref));
    let exist = false;

    for (const elem of elements){
      if(elem.attributes['href'] === firstTabLink){
        exist = true;
        break;
      }
    }

    expect(exist).toBeTruthy();
  });


});
