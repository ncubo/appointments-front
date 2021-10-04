import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of, Subscription } from 'rxjs';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
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
      declarations: [ SearchComponent ],
      providers: [
        provideMockStore({ initialState })
      ],
    })
    .compileComponents();

    store = TestBed.inject(MockStore);

  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;

    component.subscription = new Subscription();
    spyOn(store, 'dispatch').and.callFake(() => {});
    spyOn(store, 'select').and.returnValue(of(updatedState));
    spyOn(component.subscription, 'unsubscribe').and.callThrough();
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to store (searchProfessionals) and loaded have changed value', () => {
    component.ngOnInit();
    expect(store.select).toHaveBeenCalled();
    expect(component.loaded).toBe(true);
  });

  it('unsubscribe and dispatch "clearSearchProfessionals" when destroyed', () => {
    component.ngOnDestroy();
    expect(component.subscription.unsubscribe).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalled();
  });

});
