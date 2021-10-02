import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ProfessionalCardDetailComponent } from './professional-card-detail.component';

describe('ProfessionalCardDetailComponent', () => {
  let component: ProfessionalCardDetailComponent;
  let fixture: ComponentFixture<ProfessionalCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCardDetailComponent);
    component = fixture.componentInstance;

    component.professional = {
      id: 1,
      first_name: 'Maria',
      last_name: 'Fernandez',
      city: 'Temuco',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY-0JQANQENmNn3a_Z0ztbnRUOBcpxytNCQ&usqp=CAU',
      services: [
        {
          aboutme: 'Im a doctor from XX university and ....',
          service: 'Doctor',
          timetable: 'Monday to Friday - 9 to 18'
        }
      ]
    };

    fixture.detectChanges();
  });

  it('should create professional card detail component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the first last name and city in card title', () => {
    const detail = `${component.professional.first_name} ${component.professional.last_name} (${component.professional.city})`;
    const elem: HTMLElement = fixture.debugElement.query( By.css('.card-title') ).nativeElement;
    expect(elem.innerHTML).toContain(detail);
  });

  it('should show about me and time table', () => {
    const elements = fixture.debugElement.queryAll( By.css('.card-text') );
    const aboutMeFromObj = component.professional.services[0].aboutme;
    const timeTableFromObj = component.professional.services[0].timetable;
    const aboutMe = elements[0].nativeElement.innerHTML;
    const timeTable = elements[1].nativeElement.innerHTML;

    expect(aboutMe).toContain(aboutMeFromObj);
    expect(timeTable).toContain(timeTableFromObj);
  });

});
