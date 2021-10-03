import { ListComponent } from './list.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore;

  const initialState = {
    professionals: [],
    loaded: false,
    loading: true,
    error: { name:'', url:'', message: '' }
  };

  const updatedState = {
    professionals: [],
    loaded: true,
    loading: false,
    error: { name:'', url:'', message: '' }
  };

  beforeEach(async () => {
  
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState })
      ],
      imports: [
        RouterTestingModule
      ],
      declarations: [ ListComponent ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    spyOn(store, 'dispatch').and.callFake(() => {});
    spyOn(store, 'select').and.returnValue(of(updatedState));
  });

  it('should create ListComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to store (filter by professionals) and loaded have changed value', () => {
    component.ngOnInit();
    expect(store.select).toHaveBeenCalled();
    expect(component.loaded).toBe(true);
  });

  it('ListComponent should dispatch dispatchLoadProfessionals', () => {
    component.ngOnInit();
    expect(store.dispatch).toHaveBeenCalled();
  });

});
