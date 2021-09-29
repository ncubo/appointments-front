import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { ListComponent } from './list.component';
import { Observable } from 'rxjs';


xdescribe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let store: MockStore<any>;
  let actions: Observable<any>;
  const initialState = {
    professionals: [],
    loaded: false,
    loading: false,
    error: { name:'', url:'', message: '' }
  };


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        provideMockStore({ initialState }),
      ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot({})
      ],
      declarations: [ ListComponent ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);
    store.setState({});

  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    console.log('geeee', component);
    // component.error = { url: '', message:'', name:'' };
    // component.professionalList = [{ avatar:'', first_name:'', city:'', last_name:'', services: [] }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
