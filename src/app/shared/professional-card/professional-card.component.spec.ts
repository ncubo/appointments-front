import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { ProfessionalCardComponent } from './professional-card.component';

describe('ProfessionalCardComponent', () => {
  let component: ProfessionalCardComponent;
  let fixture: ComponentFixture<ProfessionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalCardComponent ],
      imports: [
        RouterTestingModule.withRoutes([])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalCardComponent);
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

  it('should create Professional Card Component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the first and last name in card title', () => {
    const fullName = `${component.professional.first_name} ${component.professional.last_name}`;
    const elem: HTMLElement = fixture.debugElement.query( By.css('.card-title') ).nativeElement;
    expect(elem.innerHTML).toContain(fullName);
  });

  it('should show the city and service he/she provide', () => {
    const cityAndService = `${component.professional.city} - ${component.professional.services[0].service}`;
    const elem: HTMLElement = fixture.debugElement.nativeElement.querySelector('.card-text');
    expect(elem.innerHTML).toContain(cityAndService);
  });

});
