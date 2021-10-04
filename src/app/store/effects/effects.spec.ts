import { TestBed } from '@angular/core/testing';
import { ProfessionalEffects } from './professional.effects';

import * as actionsIndex from '../actions';
import { Observable } from 'rxjs';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ProfessionalsService } from 'src/app/services/professionals.service';
import { TestScheduler } from 'rxjs/testing';


describe('Professional Effects', () => {

    const initialState = { 
        professional: { avatar:'', first_name:'', city:'', last_name:'', services: [] },
        loaded: false,
        loading: false,
        state: 'waiting',
        error: { url: '', name: '', message: '' }
    };

    const professionalService = jasmine.createSpyObj('ProfessionalsService', [
        'insertNewProfessional',
        'getProfessionalsById'
    ]);

    let effects: ProfessionalEffects;
    let actions: Observable<any>;
    let store: MockStore<any>;
    let testScheduler: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ProfessionalEffects,
                provideMockStore({ initialState }),
                provideMockActions(() => actions),
                { provide: ProfessionalsService, useValue: professionalService }
            ]
        });

        effects = TestBed.inject(ProfessionalEffects);
        store = TestBed.inject(MockStore);
        store.setState(initialState);

        testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });
    });

    it('should handle newProfessional and after get newProfessionalSuccess', () => {
        const newProf = { avatar:'avatar-here', city:'World', first_name: 'Peter', last_name:'Peterson', services:[{ aboutme:'Hi there!', service: 'Professor', timetable:'9-10' }] };
        const action = actionsIndex.newProfessional({ professional: newProf });
        const outcome = actionsIndex.newProfessionalSuccess();

        testScheduler.run(({ hot, cold, expectObservable } : { hot: Function, cold: Function, expectObservable: Function }) => {
            // -a-b----- (every dash for example could be 10 miliseconds)
            // -a
            //  -b
            // --b
            actions = hot('-a', { a: action });
            const response = cold('-b|', { b: newProf });
            professionalService.insertNewProfessional.and.returnValue(response);

            expectObservable(effects.newProfessionals$).toBe('--b', { b: outcome });
        });
    });



});


describe('Professionals Effects', () => {


});


describe('searchProfessionals Effects', () => {


});