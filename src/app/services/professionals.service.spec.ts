import { ProfessionalsService } from './professionals.service';
import { IProfessional } from '../models/professional.interfase';
import { of } from 'rxjs';
import { ComponentFixture } from '@angular/core/testing';
import { map, tap } from 'rxjs/operators';


describe('ProfessionalsService', () => {
  
  let httpClientSpyGet: { get: jasmine.Spy };
  let httpClientSpyPost: { post: jasmine.Spy };
  let professionalsService: ProfessionalsService;
  let fixture: ComponentFixture<ProfessionalsService>;
  
  beforeEach(() => {
    httpClientSpyGet = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
  });

  // it('should create professional service correctly', () => {
  //   expect(professionalsService).toBeTruthy();
  // });

  it('should return expected professionals list (HttpClient called once)', (done: DoneFn) => {
    professionalsService = new ProfessionalsService(httpClientSpyGet as any);
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
  
    httpClientSpyGet.get.and.returnValue(of(expectedProfessionals)); // 'of' return an observable
  
    professionalsService.getProfessionals().subscribe(
      professionals => {
        expect(professionals).toEqual(expectedProfessionals);
        done();
      },
      done.fail
    );
    expect(httpClientSpyGet.get.calls.count()).toBe(1);
  });

  // it("should call getProfessionals and return list of professionals", (done: DoneFn) => {
  //   const response: IProfessional[] = [];
  
  //   spyOn(professionalsService, 'getProfessionals').and.returnValue(of(response))
  
  //   let professionalList : IProfessional[] = [];
  //   professionalsService.getProfessionals()
  //               .subscribe(
  //                 resp => {
  //                   console.log('resp', resp);
  //                   done();
  //                 }
  //               )
  //           // .pipe(
  //           //   map( professionals => {
  //           //     console.log('professionals', professionals);
  //           //     professionalList = professionals;
  //           //     done();
  //           //   } ),
  //           // );

  //   fixture.detectChanges();
  
  //   expect(professionalList).toEqual(response);
  // });

  it('should return one professional according to a id', (done: DoneFn) => {
    professionalsService = new ProfessionalsService(httpClientSpyGet as any);
    const idToFind = 1;
    const expectedProfessional: IProfessional = {
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
  
    httpClientSpyGet.get.and.returnValue(of(expectedProfessional)); // 'of' return an observable
  
    professionalsService.getProfessionalsById(idToFind).subscribe(
      professional => {
        expect(professional).toEqual(expectedProfessional);
        done();
      },
      done.fail
    );
    expect(httpClientSpyGet.get.calls.count()).toBe(1);
  });

  it('should insert a new professional', (done: DoneFn) => {
    professionalsService = new ProfessionalsService(httpClientSpyPost as any);
    const expectedProfessional: IProfessional ={
      id: 5,
      first_name: 'Test',
      last_name: 'Test',
      city: 'Testing',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY-0JQANQENmNn3a_Z0ztbnRUOBcpxytNCQ&usqp=CAU',
      services: [
        {
          aboutme: 'Im a doctor from XX university and ....',
          service: 'Mathematical',
          timetable: 'Monday to Friday - 9 to 18'
        }
      ]
    };

    const professionalToInsert: IProfessional ={
      first_name: 'Test',
      last_name: 'Test',
      city: 'Testing',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmY-0JQANQENmNn3a_Z0ztbnRUOBcpxytNCQ&usqp=CAU',
      services: [
        {
          aboutme: 'Im a doctor from XX university and ....',
          service: 'Mathematical',
          timetable: 'Monday to Friday - 9 to 18'
        }
      ]
    };
  
    httpClientSpyPost.post.and.returnValue(of(expectedProfessional)); // 'of' return an observable
  
    professionalsService.insertNewProfessional(professionalToInsert).subscribe(
      professional => {
        expect(professional).toEqual(expectedProfessional);
        done();
      },
      done.fail
    );
    expect(httpClientSpyPost.post.calls.count()).toBe(1);
  });


});
