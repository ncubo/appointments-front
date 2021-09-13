import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewComponent } from './new.component';
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { StoreModule } from '@ngrx/store';


describe('NewComponent', () => {
  let component: NewComponent;
  let fixture: ComponentFixture<NewComponent>;
  let compiled: any;
  let firstName: any;
  let firstNameInputError: any;
  let lastName: any;
  let lastNameInputError: any;
  let city: any;
  let cityInputError: any;
  let aboutMe: any;
  let aboutMeInputError: any;
  let services: any;
  let servicesInputError: any;
  let timeTable: any;
  let timeTableInputError: any;
  let submitButton: any;

  const pushInputValue = async (el:any, value:any) => {
    el.value = value;
    el.dispatchEvent(new Event('change'));
    el.dispatchEvent(new Event('input'));
    await fixture.whenStable();
    await fixture.detectChanges();
  };

  const getByTestId = (testId: string) => {
    return compiled.querySelector(`[data-test-id="${testId}"]`);
  };

  beforeEach(async(() => {
    TestBed
      .configureTestingModule({
        imports: [
          RouterTestingModule,
          FormsModule,
          ReactiveFormsModule,
          StoreModule.forRoot({})
        ],
        declarations: [NewComponent],
        schemas : [CUSTOM_ELEMENTS_SCHEMA]
      })
      .compileComponents();
  }));
  

  beforeEach(async() => {
    fixture = TestBed.createComponent(NewComponent);
    fixture.autoDetectChanges(true);
    compiled = fixture.debugElement.nativeElement;
    component = fixture.componentInstance;

    await fixture.detectChanges();
    await fixture.whenStable();

    firstName = getByTestId('first-name');
    firstNameInputError = getByTestId('first-name-error');
    lastName = getByTestId('last-name');
    lastNameInputError = getByTestId('last-name-error');
    city = getByTestId('city');
    cityInputError = getByTestId('city-error');
    aboutMe = getByTestId('about-me');
    aboutMeInputError = getByTestId('about-me-error');
    services = getByTestId('services');
    servicesInputError = getByTestId('services-error');
    timeTable = getByTestId('time-table');
    timeTableInputError = getByTestId('time-table-error');
    submitButton = getByTestId('submit-button');

  });


  xit('initial UI is rendered as expected', async() => {
    expect(firstName.value).toBeFalsy();
    expect(firstNameInputError.value).toBeFalsy();
    expect(lastName.value).toBeFalsy();
    expect(lastNameInputError.value).toBeFalsy();
    expect(city.value).toBeFalsy();
    expect(cityInputError.value).toBeFalsy();
    expect(aboutMe.value).toBeFalsy();
    expect(aboutMeInputError.value).toBeFalsy();
    expect(services.value).toBeFalsy();
    expect(servicesInputError.value).toBeFalsy();
    expect(timeTable.value).toBeFalsy();
    expect(timeTableInputError.value).toBeFalsy();
    expect(submitButton.disabled).toBeTruthy();
  });

  it('Validation that First Name is required works', async() => {
    await pushInputValue(firstName, '');

    await fixture.detectChanges();
    await fixture.whenStable();

    firstNameInputError = getByTestId('first-name-error');
    submitButton = getByTestId('submit-button');
    expect(firstNameInputError.textContent.trim()).toBe('Invalid First Name');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
