import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProfessionalsService } from './professionals.service';
import { IProfessional } from '../models/professional.interfase';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

describe('ProfessionalsService', () => {
  
  let httpClientSpy: { get: jasmine.Spy };
  let professionalsService: ProfessionalsService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    professionalsService = new ProfessionalsService(httpClientSpy as any);
  });

  it('should create professional service correctly', () => {
    expect(professionalsService).toBeTruthy();
  });

  it('should return expected professionals (HttpClient called once)', (done: DoneFn) => {
    const expectedProfessionals: IProfessional[] =
      [
        {
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
      },
      {
        id: 2,
        first_name: 'Marcos',
        last_name: 'Perez',
        city: 'Temuco',
        avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBvoxReSWCNakgElKDljNImakGQyQ6vzRkcQ&usqp=CAU',
        services: [
          {
            aboutme: 'Im a Psychologist from ....',
            service: 'Psychologist',
            timetable: 'Monday to Friday - 13 to 19'
          }
        ]
      }
    ];
  
    httpClientSpy.get.and.returnValue(of(expectedProfessionals)); // 'of' return an observable
  
    professionalsService.getProfessionals().subscribe(
      professionals => {
        console.log('profess', professionals);
        expect(professionals).toEqual(expectedProfessionals);
        done();
      },
      done.fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1);
  });


});
