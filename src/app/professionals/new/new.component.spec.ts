import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';



describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;

  let store: MockStore;

  const initialState = { 
    professional: { avatar:'', first_name:'', city:'', last_name:'', services: [] },
    loaded: false,
    loading: false,
    state: 'waiting',
    error: { url: '', name: '', message: '' }
  };

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
      declarations: [ NewComponent ]
    })
    .compileComponents();

    store = TestBed.inject(MockStore);

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should create Form with 6 fields', () => {
    expect( component.professionalForm.contains('aboutMe') ).toBeTruthy();
    expect( component.professionalForm.contains('city') ).toBeTruthy();
    expect( component.professionalForm.contains('firstName') ).toBeTruthy();
    expect( component.professionalForm.contains('lastName') ).toBeTruthy();
    expect( component.professionalForm.contains('services') ).toBeTruthy();
    expect( component.professionalForm.contains('timeTable') ).toBeTruthy();
  });

  it('First Name should be required', () => {
    const control = component.professionalForm.get('firstName');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('Last Name should be required', () => {
    const control = component.professionalForm.get('lastName');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('About Me should be required', () => {
    const control = component.professionalForm.get('aboutMe');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('City should be required', () => {
    const control = component.professionalForm.get('city');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('Services should be required', () => {
    const control = component.professionalForm.get('services');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
    // expect( component.professionalForm.contains('timeTable') ).toBeTruthy();
  });

  it('Timetable should be required', () => {
    const control = component.professionalForm.get('timeTable');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });


});
